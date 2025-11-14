import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog | BlueSmile Dental Clinic'
};

export default function BlogPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Dental Blog</h1>
          <p className="section-subtitle">Insights, tips, and news from our team.</p>

          <BlogClient />
        </div>
      </section>
    </main>
  );
}
