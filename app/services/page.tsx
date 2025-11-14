import Image from 'next/image';
import { SERVICES } from '@/src/data/services';

export const metadata = {
  title: 'Services | BlueSmile Dental Clinic'
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Comprehensive, patient-centered dental care.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                {s.cover && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-slate-200">
                    <Image src={s.cover} alt="" fill className="object-cover" />
                  </div>
                )}
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
                <div className="mt-4">
                  <a href={`/services/${s.slug}`} className="text-brand hover:underline">Learn more →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
