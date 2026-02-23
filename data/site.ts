import { HeroSlide } from '@/types';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
    alt: 'Modern office building with glass partitions'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop',
    alt: 'Corporate interior workspace'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=1920&h=1080&fit=crop',
    alt: 'Office meeting room with glass walls'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=1080&fit=crop',
    alt: 'Commercial building interior'
  },
];

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en' as const;
