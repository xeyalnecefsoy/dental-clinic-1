export const metadata = {
  title: 'Our Team | BlueSmile Dental Clinic'
};

const TEAM = [
  { name: 'Dr. Aylin Kaya, DDS', role: 'General Dentist', bio: 'Focus on preventive care, restorative dentistry, and patient education.', img: '' },
  { name: 'Dr. Murad Aliyev, DDS', role: 'Orthodontist', bio: 'Specialist in clear aligners and braces, personalized treatment planning.', img: '' },
  { name: 'Dr. Leyla Hasan, DDS', role: 'Pediatric Dentist', bio: 'Gentle, prevention-first care for children and teens.', img: '' }
];

export default function TeamPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Meet Our Team</h1>
          <p className="section-subtitle">Experienced professionals dedicated to your comfort and oral health.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((d) => (
              <div key={d.name} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto h-20 w-20 rounded-full bg-brand/10 grid place-items-center text-brand">
                  <img src="/icons/user-circle.svg" alt="" className="h-10 w-10" />
                </div>
                <div className="mt-4 text-base font-semibold text-slate-900">{d.name}</div>
                <div className="text-sm text-slate-600">{d.role}</div>
                <p className="mt-3 text-sm text-slate-600">{d.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
