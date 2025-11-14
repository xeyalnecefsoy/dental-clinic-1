export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  icon?: string;
  cover?: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'checkups-cleaning',
    title: 'Check-ups & Cleaning',
    summary: 'Preventive exams, cleanings, and personalized hygiene plans.',
    details:
      'Routine check-ups help us detect issues early and keep your smile healthy. We remove plaque and tartar, polish teeth, and share a personalized home-care plan. Recommended every six months for most patients.',
    icon: '🪥',
    cover: '/images/svc-cleaning.svg'
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    summary: 'Whitening, veneers, and bonding for a confident smile.',
    details:
      'From professional whitening to porcelain veneers and bonding, our cosmetic treatments enhance the color, shape, and alignment of your teeth while prioritizing health and longevity.',
    icon: '✨',
    cover: '/images/svc-cosmetic.svg'
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics',
    summary: 'Clear aligners and braces tailored to your needs.',
    details:
      'We offer clear aligners and traditional braces to gently guide teeth into healthier positions, improving function and aesthetics. Treatment plans are customized to your goals and lifestyle.',
    icon: '🦷',
    cover: '/images/svc-ortho.svg'
  },
  {
    slug: 'implants',
    title: 'Implants',
    summary: 'Permanent solutions to restore missing teeth.',
    details:
      'Dental implants replace missing teeth with strong, natural-looking restorations that protect bone and support long-term oral health. We coordinate every step of your implant journey.',
    icon: '⚙️',
    cover: '/images/svc-implants.svg'
  },
  {
    slug: 'pediatric-care',
    title: 'Pediatric Care',
    summary: 'Gentle care designed for kids and teens.',
    details:
      'We create positive experiences for children with gentle techniques, education, and prevention-focused care to establish healthy habits early.',
    icon: '🧸',
    cover: '/images/svc-peds.svg'
  },
  {
    slug: 'emergency-care',
    title: 'Emergency Care',
    summary: 'Same-day relief for urgent dental issues.',
    details:
      'Toothaches, swelling, or broken teeth? Call us for same-day appointments. We focus on rapid diagnosis, pain relief, and stabilizing your oral health.',
    icon: '⛑️',
    cover: '/images/svc-emergency.svg'
  }
];
