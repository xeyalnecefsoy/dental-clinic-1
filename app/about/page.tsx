export const metadata = {
  title: 'About Us | BlueSmile Dental Clinic'
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-white to-white" />
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">We make dentistry calm, modern, and personal</h1>
              <p className="mt-4 text-slate-700">Our team blends compassionate care with advanced technology to create comfortable experiences and long‑lasting results.</p>
              <div className="mt-6 flex gap-3">
                <a href="/booking" className="btn-primary">Book Appointment</a>
                <a href="/services" className="btn-outline">Explore Services</a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-brand/5 to-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <img src="/icons/smile.svg" alt="" className="mx-auto h-7 w-7" />
                  <div className="mt-2 text-2xl font-semibold text-slate-900">10k+</div>
                  <div className="text-xs text-slate-600">Smiles treated</div>
                </div>
                <div>
                  <img src="/icons/star.svg" alt="" className="mx-auto h-7 w-7" />
                  <div className="mt-2 text-2xl font-semibold text-slate-900">4.9/5</div>
                  <div className="text-xs text-slate-600">Patient rating</div>
                </div>
                <div>
                  <img src="/icons/tooth.svg" alt="" className="mx-auto h-7 w-7" />
                  <div className="mt-2 text-2xl font-semibold text-slate-900">7 days</div>
                  <div className="text-xs text-slate-600">Open weekly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="section-subtitle">Deliver exceptional, personalized dental care with empathy and integrity.</p>
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700">We believe great dentistry is built on trust. From your first visit, we focus on your goals, comfort, and overall well‑being, providing clear guidance and tailored treatment plans.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Our Values</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[{
                  title: 'Clinical excellence', desc: 'Evidence‑based care and continuing education.'
                }, {
                  title: 'Comfort first', desc: 'Gentle techniques and calming environment.'
                }, {
                  title: 'Communication', desc: 'Transparent options and preventive education.'
                }, {
                  title: 'Community', desc: 'Inclusive care and outreach programs.'
                }].map((v) => (
                  <div key={v.title} className="rounded-lg border border-slate-200 p-5 bg-white">
                    <div className="text-sm font-semibold text-slate-900">{v.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section bg-slate-50">
        <div className="container max-w-6xl">
          <h2 className="section-title">Advanced Technology</h2>
          <p className="section-subtitle">Innovation that enhances accuracy, safety, and comfort.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[{
              icon: '/icons/tooth.svg', title: 'Digital X‑rays', desc: 'Sharp imaging with reduced radiation exposure.'
            }, {
              icon: '/icons/star.svg', title: 'Intraoral Scanners', desc: 'Mess‑free digital impressions for better fit.'
            }, {
              icon: '/icons/smile.svg', title: 'Sterilization', desc: 'Hospital‑grade protocols for your safety.'
            }].map((t) => (
              <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded bg-brand/10 grid place-items-center">
                  <img src={t.icon} alt="" className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg font-semibold text-slate-900">{t.title}</div>
                <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="rounded-2xl border border-slate-200 p-8 bg-gradient-to-br from-brand/5 to-white flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Meet the people behind the care</h3>
              <p className="mt-2 text-slate-600 max-w-xl">Our doctors and team members are dedicated to building long‑term relationships and a welcoming atmosphere.</p>
            </div>
            <a href="/team" className="btn-primary">Meet Our Team</a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-slate-50">
        <div className="container max-w-5xl text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Ready to plan your visit?</h3>
          <p className="mt-2 text-slate-600">Book an appointment or contact us with any questions. We’re here to help.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/booking" className="btn-primary">Book Appointment</a>
            <a href="tel:+994550000000" className="btn-outline">Call us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
