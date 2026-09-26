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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2021_Toyota_Innova_Crysta_2.4_ZX_%28India%29_front_view_02.png/800px-2021_Toyota_Innova_Crysta_2.4_ZX_%28India%29_front_view_02.png',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2019_Suzuki_Ertiga_GL_1.5_NC32S_%2820190918%29.jpg/800px-2019_Suzuki_Ertiga_GL_1.5_NC32S_%2820190918%29.jpg',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/2020_Hyundai_Creta_1.4_Turbo_SX_Opt_%28India%29_front_view_01.png/800px-2020_Hyundai_Creta_1.4_Turbo_SX_Opt_%28India%29_front_view_01.png',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2018_Maruti_Suzuki_Swift_ZXi_Plus_%28India%29_front_view.jpg/800px-2018_Maruti_Suzuki_Swift_ZXi_Plus_%28India%29_front_view.jpg',
    rentalTypes: ['Local'],
    status: 'Pending Confirmation'
  }
];
