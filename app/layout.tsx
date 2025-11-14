import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BlueSmile Dental Clinic',
  description: 'Modern dental care with compassionate professionals. Book your appointment today.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'BlueSmile Dental Clinic',
    description: 'Modern dental care with compassionate professionals.',
    type: 'website'
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-block h-6 w-6 rounded bg-brand" />
              <span>BlueSmile</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
              <a href="/services" className="hover:text-slate-900">Services</a>
              <a href="/blog" className="hover:text-slate-900">Blog</a>
              <a href="/team" className="hover:text-slate-900">Team</a>
              <a href="/about" className="hover:text-slate-900">About Us</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="/booking" className="btn-primary">Book Appointment</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200/60">
          <div className="container py-12 grid gap-8 md:grid-cols-4 text-sm text-slate-600">
            <div>
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <span className="inline-block h-6 w-6 rounded bg-brand" />
                <span>BlueSmile</span>
              </div>
              <p className="mt-3">Modern dental care with compassionate professionals.</p>
            </div>
            <div>
              <div className="font-medium text-slate-900">Contact</div>
              <ul className="mt-3 space-y-2">
                <li><span className="text-slate-500">Phone:</span> <a className="hover:underline" href="tel:+994550000000">+994 55 000 00 00</a></li>
                <li><span className="text-slate-500">Email:</span> <a className="hover:underline" href="mailto:hello@bluesmile.az">hello@bluesmile.az</a></li>
                <li><span className="text-slate-500">Address:</span> 123 Smile Street, Baku, Azerbaijan</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-900">Hours</div>
              <ul className="mt-3 space-y-2">
                <li>Mon–Fri: 9:00–19:00</li>
                <li>Sat–Sun: 10:00–16:00</li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-900">Links</div>
              <ul className="mt-3 space-y-2">
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="/team" className="hover:underline">Team</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/booking" className="hover:underline">Book Appointment</a></li>
              </ul>
              <div className="mt-4 flex items-center gap-4 text-slate-500">
                <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-slate-800">
                  <img src="/icons/facebook.svg" alt="" className="h-5 w-5" />
                </a>
                <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-slate-800">
                  <img src="/icons/instagram.svg" alt="" className="h-5 w-5" />
                </a>
                <a aria-label="X" href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-slate-800">
                  <img src="/icons/x.svg" alt="" className="h-5 w-5" />
                </a>
                <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-slate-800">
                  <img src="/icons/youtube.svg" alt="" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200/60">
            <div className="container py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} BlueSmile Dental Clinic</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
