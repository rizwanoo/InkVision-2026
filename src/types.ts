export interface Artwork {
  id: string;
  title: string;
  category: 'fineline' | 'blackwork' | 'realism' | 'irezumi';
  categoryLabel: string;
  image: string;
  artist: string;
  artistId: string;
  estimatedHours: string;
  painLevel: number; // 1-5
  placement: string;
  description: string;
  isHealedAvailable?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
  bio: string;
  bookingStatus: string;
  instagram: string;
  hourlyRate: number;
}

export interface FlashItem {
  id: string;
  title: string;
  series: string;
  price: number;
  size: string;
  image: string;
  status: 'available' | 'claimed';
  artist: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  city: string;
  quote: string;
  artist: string;
  style: string;
  healedTime: string;
  rating: number;
}
