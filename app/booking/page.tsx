export const metadata = {
  title: 'Book Appointment | BlueSmile Dental Clinic'
};

export default function BookingPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h1 className="section-title">Book Your Appointment</h1>
            <p className="section-subtitle">Select your preferred date and time. We will confirm by phone or email.</p>
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
              <p className="text-xs text-slate-500">By submitting, you agree to be contacted to confirm your visit.</p>
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
