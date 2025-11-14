import { BLOG_POSTS } from '@/src/data/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <section className="section">
        <div className="container max-w-3xl">
          <div className="text-sm text-slate-500">
            <a href="/blog" className="text-brand hover:underline">← Back to Blog</a>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">{post.title}</h1>
          <div className="mt-2 text-sm text-slate-500">{new Date(post.date).toLocaleDateString()} · {post.category} · By {post.author}</div>
          {post.cover && (
            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
              <Image src={post.cover} alt="" fill className="object-cover" />
            </div>
          )}
          <article className="prose prose-slate mt-6 max-w-none">
            <p>{post.content}</p>
          </article>
          <div className="mt-12">
            <div className="text-lg font-semibold text-slate-900">Related articles</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {(related.length ? related : fallback).map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition block">
                  <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()} · {p.category}</div>
                  <div className="mt-1 font-medium text-slate-900 line-clamp-2">{p.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
