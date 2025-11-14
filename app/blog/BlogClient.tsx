"use client";
import Image from "next/image";
import { useEffect, useMemo, useState, Suspense } from "react";
import { BLOG_POSTS } from "@/src/data/blog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// useSearchParams istifadə edən daxili komponent
function BlogContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(
    searchParams.get("category") ?? "All"
  );

  // Sync local state to URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    q ? params.set("q", q) : params.delete("q");
    category && category !== "All"
      ? params.set("category", category)
      : params.delete("category");
    const url = `${pathname}?${params.toString()}`;
    router.replace(url as any, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, category]);

  const categories = [
    "All",
    "Tips",
    "Cosmetic",
    "Orthodontics",
    "Implants",
    "Pediatric",
  ];

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return BLOG_POSTS.filter((p) => {
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query);
      const matchCat =
        !category || category === "All" || p.category === (category as any);
      return matchQuery && matchCat;
    });
  }, [q, category]);

  return (
    <div>
      <form
        className="mt-8 grid gap-3 md:grid-cols-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button disabled className="btn-outline">
          Filters
        </button>
      </form>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition"
          >
            {p.cover && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image src={p.cover} alt="" fill className="object-cover" />
              </div>
            )}
            <div className="mt-4 text-xs text-slate-500">
              {new Date(p.date).toLocaleDateString()} · {p.category}
            </div>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              <a href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
            <div className="mt-4">
              <a
                href={`/blog/${p.slug}`}
                className="text-brand hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-lg border border-slate-200 p-6 text-center text-slate-600">
            No articles found.
          </div>
        )}
      </div>
    </div>
  );
}

// Loading fallback komponenti
function BlogSkeleton() {
  return (
    <div>
      <div className="mt-8 grid gap-3 md:grid-cols-3 animate-pulse">
        <div className="h-12 bg-slate-200 rounded-md"></div>
        <div className="h-12 bg-slate-200 rounded-md"></div>
        <div className="h-12 bg-slate-200 rounded-md"></div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 animate-pulse"
          >
            <div className="aspect-[16/9] bg-slate-200 rounded-lg"></div>
            <div className="mt-4 h-4 bg-slate-200 rounded w-1/3"></div>
            <div className="mt-2 h-6 bg-slate-200 rounded w-3/4"></div>
            <div className="mt-2 h-4 bg-slate-200 rounded"></div>
            <div className="mt-2 h-4 bg-slate-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Ana komponent - Suspense wrapper
export default function BlogClient() {
  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogContent />
    </Suspense>
  );
}
