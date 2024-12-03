export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  imageUrl?: string;
  options?: {
    vegetarian?: boolean;
    spicy?: boolean;
    allergens?: string[];
  };
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

export interface FoodBookingConfig {
  restaurantId: string;
  language: 'fr' | 'en';
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
}

export interface Category {
  id: string;
  name: string;
}