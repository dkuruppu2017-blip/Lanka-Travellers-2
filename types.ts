export type Currency = 'USD' | 'EUR' | 'GBP' | 'LKR';
export type Language = 'EN' | 'FR' | 'DE';

export type PackageCategory = 'all' | 'cultural' | 'hill-country' | 'coastal' | 'honeymoon';

export interface DayItinerary {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  meals: string;
  stay: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  regionTag: string;
  category: 'cultural' | 'hill-country' | 'coastal' | 'honeymoon';
  badge: string;
  badgeType?: 'primary' | 'secondary' | 'tertiary';
  durationDays: number;
  durationNights: number;
  days?: number;
  nights?: number;
  priceUsd: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  image: string;
  fallbackImage: string;
  tag: string;
  tagIcon: string;
  places: string[];
  route: string;
  shortDescription: string;
  detailedDescription: string;
  itinerary: DayItinerary[];
}

export interface Destination {
  id: string;
  name: string;
  sinhalaName: string;
  tagline: string;
  region: string;
  description: string;
  heroImage: string;
  image?: string;
  highlights: string[];
  bestSeason: string;
  travelTimeFromColombo: string;
  climate: string;
  idealDuration?: string;
  keyActivities: string[];
  recommendedPackages: string[];
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  badge: string;
  badgeColor: string;
  bio: string;
  image: string;
  fallbackImage: string;
}

export interface Testimonial {
  name: string;
  location: string;
  countryFlag: string;
  avatarInitials: string;
  date: string;
  rating: number;
  quote: string;
  tourTaken: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  tag: string;
}
