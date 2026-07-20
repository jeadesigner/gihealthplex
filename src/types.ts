export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  role?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials?: string[];
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface Perk {
  id: string;
  title: string;
  description: string;
  iconName: string; // references Lucide icon keys
  emoji: string;
}

export interface StatItem {
  value: string;
  label: string;
}
