
export interface Tour {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'Sunset' | 'Adventure' | 'Private';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum TourCategory {
  SUNSET = 'Sunset',
  ADVENTURE = 'Adventure',
  PRIVATE = 'Private'
}
