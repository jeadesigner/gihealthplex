import { TeamMember, Testimonial, GalleryItem, Perk, StatItem } from './types';

export const HERO_STATS: StatItem[] = [
  { value: "12,000", label: "sq ft Facility" },
  { value: "40+", label: "Cardio Machines" },
  { value: "Unlimited", label: "Classes Included" },
  { value: "24/7", label: "Member Access" },
];

export const MEMBERSHIP_PERKS: Perk[] = [
  {
    id: "perk-1",
    title: "State of the Art Equipment",
    description: "Access to world-class Technogym, Hammer Strength, and life-fitness machines designed to elevate performance.",
    iconName: "Dumbbell",
    emoji: "🏋️",
  },
  {
    id: "perk-2",
    title: "12,000 sq ft Facility",
    description: "An expansive, meticulously cleaned space containing structured zones for cardio, heavy weights, and functional athletic conditioning.",
    iconName: "Building",
    emoji: "🏢",
  },
  {
    id: "perk-3",
    title: "Unlimited Classes",
    description: "From spinning and yoga to high-intensity functional circuits, participate in any group class led by certified leaders.",
    iconName: "Users",
    emoji: "💪",
  },
  {
    id: "perk-4",
    title: "24/7 Member Access",
    description: "Work out entirely on your own schedule. Rest assured with our highly secure, fully monitored round-the-clock entry system.",
    iconName: "Key",
    emoji: "🔑",
  },
  {
    id: "perk-5",
    title: "Free Tanning",
    description: "Maintain a golden summer glow year-round with our premium, high-efficiency tanning beds accessible to all members.",
    iconName: "Sun",
    emoji: "☀️",
  },
  {
    id: "perk-6",
    title: "Whirlpool & Sauna",
    description: "Maximize your physical recovery in our luxury, custom-crafted wood sauna and deep heat therapy hydromassage whirlpool.",
    iconName: "Droplets",
    emoji: "🧖",
  },
];

export const WHY_CHOOSE_US_STATS: StatItem[] = [
  { value: "40+", label: "Cardio Equipment" },
  { value: "12,000", label: "Square Feet" },
  { value: "24/7", label: "Access" },
  { value: "1982", label: "Serving Grand Island" },
];

export const OWNER_DETAILS = {
  name: "Scott Norton",
  role: "Owner & CEO",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  bio: [
    "Scott Norton, a Grand Island native, discovered his passion for health and fitness at the age of 15.",
    "Only a few years later, he transformed that passion into reality by becoming the proud owner of Health Plex Fitness Center in 1982.",
    "Today, Scott remains deeply committed to helping every member achieve their personal fitness goals while maintaining a welcoming, family-oriented atmosphere."
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Scott Norton",
    role: "Owner & CEO",
    bio: "Scott has dedicated over 40 years to providing Grand Island with an unmatched environment for health, personal growth, and community fitness.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    credentials: ["Founder (1982)", "Certified Club Operator", "Community Fitness Advocate"],
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Sam Murphy",
    role: "General Manager",
    bio: "Sam has grown up with Health Plex and has been immersed in fitness her entire life, focusing on nutrition and high-performance biomechanics.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
    credentials: ["AAAI/ISMA Personal Trainer", "AAAI/ISMA Sports Nutritionist"],
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Shari Cole",
    role: "Trainer",
    bio: "Member of the Health Plex team since 2004. An unstoppable force in weightlifting and spinning instruction with decades of athletic experience.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
    credentials: [
      "Spin Instructor",
      "Retired Health Teacher",
      "Competitive Bodybuilder",
      "World Record Holder",
      "231 lb Bench Press",
    ],
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Brenda",
    rating: 5,
    text: "Definitely a place that I feel welcomed and the staff truly care about every customer. You can definitely tell it's family-oriented and I highly recommend anyone to start their health journey here.",
    role: "Member since 2021",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "test-2",
    name: "Marcus T.",
    rating: 5,
    text: "The 24/7 keycard access is an absolute game changer for my erratic night shift hours. The facility is constantly immaculate, weights are always organized, and the equipment is outstanding.",
    role: "Night-Shift Hero",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "test-3",
    name: "Jessica R.",
    rating: 5,
    text: "I've trained with Shari Cole for over a year now, and my bench press and confidence have gone through the roof. This gym isn't just a place to sweat, it's a tight-knit family of positive energy.",
    role: "Powerlifting Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "test-4",
    name: "David L.",
    rating: 5,
    text: "For $1 a day, you get massive value that wipes out any franchise gym. High-end free weights, unlimited spin classes, tanning, and recovery amenities. Simply unmatched in Grand Island.",
    role: "Daily Commuter",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "Weight Room",
    title: "Heavy Free Weights Zone",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal-2",
    category: "Cardio Area",
    title: "Premium Cardio Deck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal-3",
    category: "Group Classes",
    title: "High-Energy Spin Studio",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal-4",
    category: "Personal Training",
    title: "1-on-1 Performance Coaching",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal-5",
    category: "Outdoor Training",
    title: "Functional Athletic Arena",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal-6",
    category: "Sauna",
    title: "Eucalyptus Infused Infrared Sauna",
    image: "https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal-7",
    category: "Whirlpool",
    title: "Thermal Hydrotherapy Whirlpool",
    image: "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&q=80&w=800",
  }
];

export const STAFFED_HOURS = [
  { days: "Monday – Thursday", hours: "8:00 AM – 8:00 PM" },
  { days: "Friday", hours: "8:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 12:00 PM" },
  { days: "Sunday", hours: "Closed" }
];

export const GYM_CONTACT_INFO = {
  address: "2909 W US-HWY 30, Grand Island, NE 68803",
  phone: "(308) 384-5111", // realistic local Grand Island number
  email: "info@healthplexgi.com",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8360408542917!2d-98.3752538!3d40.9193181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8799fa688929df57%3A0xc3f60f64be7bcf52!2s2909%20W%20U.S.%20Hwy%2030%2C%20Grand%20Island%2C%20NE%2068803!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};
