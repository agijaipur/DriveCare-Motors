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
    priceText: '₹2500 / day',
    description: 'The Toyota Innova Crysta is a premium MPV known for its comfort, reliability, and spacious interiors. Perfect for family trips and outstation travel.',
    features: ['AC', 'Power Steering', 'Power Windows', 'Airbags', 'ABS'],
    imageUrl: '/images/innova.jpg',
    rentalTypes: ['Local', 'Outstation'],
    status: 'Available'
  },
  {
    id: 'v2',
    name: 'Mahindra Thar',
    slug: 'mahindra-thar',
    category: 'SUV',
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Diesel',
    priceText: '₹3500 / day',
    description: 'The legendary Mahindra Thar is perfect for off-roading adventures and making a bold statement on the road.',
    features: ['AC', '4x4', 'Convertible Top', 'Alloy Wheels'],
    imageUrl: '/images/thar.jpg',
    rentalTypes: ['Local', 'Outstation'],
    status: 'Available'
  },
  {
    id: 'v3',
    name: 'Tata Tiago',
    slug: 'tata-tiago',
    category: 'Hatchback',
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    priceText: '₹1200 / day',
    description: 'A stylish, safe, and fun-to-drive hatchback with excellent fuel efficiency, ideal for city commutes.',
    features: ['AC', 'Harman Audio', 'Airbags', 'ABS'],
    imageUrl: '/images/tiago.jpg',
    rentalTypes: ['Local'],
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
    priceText: '₹1500 / day',
    description: 'A compact and peppy hatchback that is perfect for navigating city traffic with ease while providing excellent fuel economy.',
    features: ['AC', 'Power Steering', 'Airbags', 'ABS'],
    imageUrl: '/images/swift.jpg',
    rentalTypes: ['Local'],
    status: 'Available'
  }
];
