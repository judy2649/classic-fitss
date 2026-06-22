import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Elegant Pink Evening Gown',
    price: 4500,
    originalPrice: 6000,
    image: 'https://images.unsplash.com/photo-1566160983933-28787f174ee9?auto=format&fit=crop&q=80&w=800',
    category: 'Clothes',
    description: 'A beautiful and elegant pink evening gown for special occasions.',
    rating: 4.8,
    reviews: 120
  },
  {
    id: '2',
    name: 'Rose Gold Sequin Wrap Dress',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    category: 'Clothes',
    description: 'Stunning wrap dress with rose gold sequins.',
    rating: 4.5,
    reviews: 85
  },
  {
    id: '3',
    name: 'Blush Pink Stiletto Heels',
    price: 3500,
    originalPrice: 4200,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    category: 'Heels',
    description: 'Elegant stiletto heels perfect for formal wear.',
    rating: 4.9,
    reviews: 145
  },
  {
    id: '4',
    name: 'Rose Leather Crossbody Bag',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
    category: 'Bags',
    description: 'Premium leather crossbody bag in a soft rose hue.',
    rating: 4.9,
    reviews: 210
  },
  {
    id: '5',
    name: 'Floral Chiffon Midi Dress',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800',
    category: 'Clothes',
    description: 'Lightweight chiffon dress with delicate floral prints.',
    rating: 4.6,
    reviews: 62
  },
  {
    id: '6',
    name: 'Rose Quartz Statement Necklace',
    price: 850,
    originalPrice: 1100,
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f809966b?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories',
    description: 'Gorgeous statement necklace featuring natural rose quartz stones.',
    rating: 4.7,
    reviews: 38
  }
];
