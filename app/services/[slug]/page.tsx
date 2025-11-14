import { SERVICES } from '@/src/data/services';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return notFound();
  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <main>
      <section className="section">
        <div className="container max-w-3xl">
          <div className="text-sm text-slate-500">
            <a href="/services" className="text-brand hover:underline">← Back to Services</a>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">{svc.title}</h1>
          {svc.cover && (
            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
              <Image src={svc.cover} alt="" fill className="object-cover" />
            </div>
          )}
          <div className="prose prose-slate mt-6 max-w-none">
            <p>{svc.details}</p>
          </div>
          <div className="mt-8">
            <a href="/booking" className="btn-primary">Book this service</a>
          </div>
          <div className="mt-12">
            <div className="text-lg font-semibold text-slate-900">Related services</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <a key={r.slug} href={`/services/${r.slug}`} className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition block">
                  <div className="font-medium text-slate-900">{r.title}</div>
                  <div className="mt-1 text-sm text-slate-600 line-clamp-2">{r.summary}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
