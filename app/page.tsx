import Image from 'next/image';
export default function Page() {
  return (
    <main>
      <section className="section">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Modern dental care for every smile</h1>
            <p className="mt-4 text-slate-600 text-lg">Compassionate professionals, advanced technology, and a comfortable experience. Your oral health is our priority.</p>
            <div className="mt-8 flex items-center gap-4">
              <a href="/booking" className="btn-primary">Book Appointment</a>
              <a href="/services" className="btn-outline">Explore Services</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="mx-auto h-7 w-7 text-brand">
                  <img src="/icons/smile.svg" alt="Smiles" className="h-7 w-7 mx-auto" />
                </div>
                <div className="text-3xl font-semibold text-brand">+10k</div>
                <div className="text-sm text-slate-600">Smiles treated</div>
              </div>
              <div>
                <div className="mx-auto h-7 w-7 text-brand">
                  <img src="/icons/star.svg" alt="Rating" className="h-7 w-7 mx-auto" />
                </div>
                <div className="text-3xl font-semibold text-brand">4.9★</div>
                <div className="text-sm text-slate-600">Average rating</div>
              </div>
              <div>
                <div className="mx-auto h-7 w-7 text-brand">
                  <img src="/icons/tooth.svg" alt="Open weekly" className="h-7 w-7 mx-auto" />
                </div>
                <div className="text-3xl font-semibold text-brand">7d</div>
                <div className="text-sm text-slate-600">Open weekly</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <Image src="/images/hero.svg" alt="Smiling patient" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section bg-slate-50">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive dental care for the whole family.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              slug: 'checkups-cleaning', title: 'Check-ups & Cleaning', desc: 'Preventive exams, cleanings, and personalized hygiene plans.', iconSrc: '/icons/tooth.svg'
            }, {
              slug: 'cosmetic-dentistry', title: 'Cosmetic Dentistry', desc: 'Whitening, veneers, and bonding for a confident smile.', iconSrc: '/icons/star.svg'
            }, {
              slug: 'orthodontics', title: 'Orthodontics', desc: 'Clear aligners and braces tailored to your needs.', iconSrc: '/icons/tooth.svg'
            }, {
              slug: 'implants', title: 'Implants', desc: 'Permanent solutions to restore missing teeth.', iconSrc: '/icons/tooth.svg'
            }, {
              slug: 'pediatric-care', title: 'Pediatric Care', desc: 'Gentle care designed for kids and teens.', iconSrc: '/icons/smile.svg'
            }, {
              slug: 'emergency-care', title: 'Emergency Care', desc: 'Same-day relief for urgent dental issues.', iconSrc: '/icons/phone.svg'
            }].map((s) => (
              <a key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block">
                <div className="h-10 w-10 rounded bg-brand/10 text-brand grid place-items-center">
                  <img src={s.iconSrc} alt="" className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Experienced professionals dedicated to your care.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              name: 'Dr. Aylin Kaya, DDS', role: 'General Dentist'
            }, {
              name: 'Dr. Murad Aliyev, DDS', role: 'Orthodontist'
            }, {
              name: 'Dr. Leyla Hasan, DDS', role: 'Pediatric Dentist'
            }].map((d) => (
              <div key={d.name} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto h-20 w-20 rounded-full bg-brand/10 grid place-items-center text-brand">
                  <img src="/icons/user-circle.svg" alt="" className="h-10 w-10" />
                </div>
                <div className="mt-4 text-base font-semibold text-slate-900">{d.name}</div>
                <div className="text-sm text-slate-600">{d.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section bg-slate-50">
        <div className="container">
          <h2 className="section-title">What Patients Say</h2>
          <p className="section-subtitle">Real stories from our community.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[{
              quote: 'The best dental experience I have ever had.', name: 'Sara'
            }, {
              quote: 'Friendly team and beautiful clinic.', name: 'Emil'
            }, {
              quote: 'Quick, painless, and professional.', name: 'Nigar'
            }].map((t) => (
              <figure key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <blockquote className="text-slate-800">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="section-title">Book Your Appointment</h2>
            <p className="section-subtitle">Fill out the form and our team will contact you to confirm.</p>
            <form className="mt-8 grid gap-4">
              <input required placeholder="Full name" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2" />
              <input required type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2" />
              <input required type="tel" placeholder="Phone" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="date" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2" />
                <input required type="time" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2" />
              </div>
              <select className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2">
                <option>General Check-up</option>
                <option>Cosmetic Dentistry</option>
                <option>Orthodontics</option>
                <option>Implants</option>
                <option>Pediatric Care</option>
                <option>Emergency</option>
              </select>
              <textarea rows={4} placeholder="Notes (optional)" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:border-brand focus:ring-brand/30 focus:outline-none focus:ring-2" />
              <button type="submit" className="btn-primary">Request Appointment</button>
              <p className="text-xs text-slate-500">Prefer a different time? Use the full form on our booking page.</p>
              <a href="/booking" className="btn-outline">Open Booking Page</a>
            </form>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-brand/5 to-white">
            <div className="text-slate-900 text-lg font-semibold">Visit Us</div>
            <p className="mt-2 text-slate-600">123 Smile Street, Baku, Azerbaijan</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="font-medium text-slate-900">Hours</div>
                <p className="mt-1 text-slate-600">Mon–Fri: 9:00–19:00</p>
                <p className="text-slate-600">Sat–Sun: 10:00–16:00</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="font-medium text-slate-900">Contact</div>
                <p className="mt-1 text-slate-600">+994 55 000 00 00</p>
                <p className="text-slate-600">hello@bluesmile.az</p>
              </div>
            </div>
            <a href="#" className="mt-6 inline-flex text-brand hover:underline">Get directions</a>
          </div>
        </div>
      </section>
    </main>
  );
}
