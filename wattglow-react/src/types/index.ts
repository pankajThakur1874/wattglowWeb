// Core application types

export interface NavigationItem {
  label: string;
  path: string;
  dropdown?: NavigationItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  link: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
}

export interface Stat {
  id: string;
  value: string | number;
  label: string;
  icon: string;
  suffix?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

export interface OfferingPage {
  id: string;
  title: string;
  slug: string;
  heroImage: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  images: string[];
}
