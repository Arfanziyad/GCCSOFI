export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  gallery: string[];
  brandPartner?: {
    name: string;
    logo: string;
    tagline: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  image: string;
  gallery: string[];
}

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export type Locale = 'en' | 'ar';
