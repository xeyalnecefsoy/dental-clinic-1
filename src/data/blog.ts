export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Tips' | 'Cosmetic' | 'Orthodontics' | 'Implants' | 'Pediatric';
  date: string;
  author: string;
  cover?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'daily-oral-hygiene-tips',
    title: 'Daily Oral Hygiene Tips for a Healthier Smile',
    excerpt: 'Simple, effective habits to keep your teeth and gums in top shape every day.',
    content:
      'Brushing twice daily with fluoride toothpaste and flossing once a day are the foundations of oral health. Replace your toothbrush every 3–4 months and consider an electric toothbrush for more consistent pressure. Don’t forget to brush your tongue to reduce bacteria and freshen breath. Limit sugary snacks and acidic drinks, and rinse with water after meals when brushing isn’t possible. Regular dental check-ups help prevent small issues from becoming big problems.',
    category: 'Tips',
    date: '2025-03-18',
    author: 'Dr. Aylin Kaya',
    cover: '/images/blog-hygiene.svg'
  },
  {
    slug: 'are-teeth-whitening-safe',
    title: 'Are Teeth Whitening Treatments Safe?',
    excerpt: 'Learn about professional whitening options, safety, and what to expect.',
    content:
      'Professional whitening performed by a dentist is safe and effective. Your dentist customizes the treatment to your needs and monitors sensitivity. Over-the-counter kits vary widely in strength and fit. If you have existing restorations, whitening won’t change their color. A consult helps determine the best approach for you.',
    category: 'Cosmetic',
    date: '2025-04-02',
    author: 'Dr. Murad Aliyev',
    cover: '/images/blog-whitening.svg'
  },
  {
    slug: 'clear-aligners-vs-braces',
    title: 'Clear Aligners vs. Braces: Which Is Right for You?',
    excerpt: 'We compare comfort, appearance, treatment time, and maintenance.',
    content:
      'Clear aligners are discreet and removable, making hygiene easier, while braces are fixed and often more efficient for complex movements. Treatment time varies per case. Compliance is key with aligners—wearing them 20–22 hours daily. A consultation with our orthodontist will help determine the best option based on your goals.',
    category: 'Orthodontics',
    date: '2025-05-10',
    author: 'Dr. Murad Aliyev',
    cover: '/images/blog-aligners.svg'
  }
];
