export interface Vehicle {
  id: string;
  name: string;
  slug: string;
  category: string;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'CNG';
  priceText: string;
  description: string;
  features: string[];
  imageUrl: string;
  rentalTypes: ('Local' | 'Outstation')[];
  status: 'Available' | 'Unavailable' | 'Pending Confirmation' | 'Information';
}

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Toyota Innova Crysta',
    slug: 'toyota-innova-crysta',
    category: '7 Seater',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Diesel',
    priceText: '₹XXXX / day',
    description: 'The Toyota Innova Crysta is a premium MPV known for its comfort, reliability, and spacious interiors. Perfect for family trips and outstation travel.',
    features: ['AC', 'Power Steering', 'Power Windows', 'Airbags', 'ABS'],
    imageUrl: 'https://images.unsplash.com/photo-1669299617277-28d8b672722b?q=80&w=800&auto=format&fit=crop', // Placeholder for MPV
    rentalTypes: ['Local', 'Outstation'],
    status: 'Available'
  },
  {
    id: 'v2',
    name: 'Maruti Suzuki Ertiga',
    slug: 'maruti-suzuki-ertiga',
    category: '7 Seater',
    seats: 7,
    transmission: 'Manual',
    fuel: 'CNG',
    priceText: '₹XXXX / day',
    description: 'A versatile and economical 7-seater MPV, ideal for larger groups looking for comfortable local travel.',
    features: ['AC', 'Power Steering', 'Bluetooth Audio', 'Airbags'],
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=800&auto=format&fit=crop', // Placeholder
    rentalTypes: ['Local', 'Outstation'],
    status: 'Information'
  },
  {
    id: 'v3',
    name: 'Hyundai Creta',
    slug: 'hyundai-creta',
    category: 'SUV',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    priceText: '₹XXXX / day',
    description: 'The Hyundai Creta offers a smooth drive with premium features, making it a great choice for both city driving and highway cruising.',
    features: ['AC', 'Touchscreen Infotainment', 'Sunroof', 'Airbags', 'Rear Camera'],
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop', // Placeholder for SUV
    rentalTypes: ['Local', 'Outstation'],
    status: 'Available'
  },
  {
    id: 'v4',
    name: 'Maruti Suzuki Swift',
    slug: 'maruti-suzuki-swift',
    category: 'Hatchback',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    priceText: '₹XXXX / day',
    description: 'A compact and peppy hatchback that is perfect for navigating city traffic with ease while providing excellent fuel economy.',
    features: ['AC', 'Power Steering', 'Airbags', 'ABS'],
    imageUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop', // Placeholder for Hatchback
    rentalTypes: ['Local'],
    status: 'Pending Confirmation'
  }
];
