import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'operable-walls-moving-glass-walls',
    title: 'Operable Walls & Moving Glass Walls',
    description: 'Transform your space with our premium operable wall systems. Perfect for hotels, conference centers, and commercial spaces requiring flexible room configurations.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    features: [
      'Acoustic performance up to 55dB',
      'Manual or automatic operation',
      'Custom finishes and colors',
      'Fire-rated options available',
      'Easy installation and maintenance',
      'Space-saving storage solutions'
    ],
    specs: [
      { label: 'Max Height', value: 'Up to 12 meters' },
      { label: 'Max Width', value: 'Unlimited' },
      { label: 'Thickness', value: '65mm - 150mm' },
      { label: 'Acoustic Rating', value: 'Up to 55dB' },
      { label: 'Fire Rating', value: 'Up to 120 minutes' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    ]
  },
  {
    id: '2',
    slug: 'hpl-washroom-cubicles',
    title: 'HPL Washroom Cubicles',
    description: 'High-quality, durable washroom cubicle systems made from High Pressure Laminate. Ideal for commercial, educational, and public facilities.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
    features: [
      'Water and moisture resistant',
      'Scratch and impact resistant',
      'Anti-bacterial surface',
      'Wide range of colors and textures',
      'Easy to clean and maintain',
      'Environmentally friendly materials'
    ],
    specs: [
      { label: 'Material', value: 'High Pressure Laminate' },
      { label: 'Thickness', value: '12mm - 13mm' },
      { label: 'Hardware', value: 'Stainless Steel 304/316' },
      { label: 'Colors', value: '100+ options' },
      { label: 'Warranty', value: '10 years' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=1200&h=800&fit=crop',
    ]
  },
  {
    id: '3',
    slug: 'pivot-doors',
    title: 'Pivot Doors',
    description: 'Elegant pivot door systems that make a bold architectural statement. Perfect for modern office buildings, luxury hotels, and high-end residential projects.',
    image: 'https://images.unsplash.com/photo-1534172154-5a0e69e99e46?w=800&h=600&fit=crop',
    features: [
      'Contemporary design',
      'Smooth silent operation',
      'Custom sizes available',
      'Various material options',
      'Heavy-duty pivot hinges',
      'Integrated access control ready'
    ],
    specs: [
      { label: 'Max Height', value: 'Up to 4 meters' },
      { label: 'Max Width', value: 'Up to 2 meters' },
      { label: 'Weight Capacity', value: 'Up to 300kg' },
      { label: 'Materials', value: 'Glass, Wood, Metal' },
      { label: 'Finish', value: 'Custom' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1534172154-5a0e69e99e46?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1568548656846-f9d19721e769?w=1200&h=800&fit=crop',
    ]
  },
  {
    id: '4',
    slug: 'hydraulic-doors',
    title: 'Hydraulic Doors',
    description: 'Advanced hydraulic door systems offering controlled, smooth operation. Ideal for heavy-traffic commercial and industrial applications.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop',
    features: [
      'Automatic operation',
      'Adjustable closing speed',
      'Safety sensors included',
      'Low maintenance',
      'Energy efficient',
      'Weatherproof options'
    ],
    specs: [
      { label: 'Opening Speed', value: 'Adjustable' },
      { label: 'Power Supply', value: '220V / 110V' },
      { label: 'Safety', value: 'Obstacle detection' },
      { label: 'Operation', value: 'Automatic / Manual' },
      { label: 'Warranty', value: '5 years' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
    ]
  },
  {
    id: '5',
    slug: 'terrace-solutions',
    title: 'Terrace Solutions',
    description: 'Comprehensive terrace and outdoor space solutions including pergolas, retractable roofs, and glass enclosures.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    features: [
      'Weather protection',
      'UV resistant materials',
      'Motorized options',
      'Custom designs',
      'Durable construction',
      'Aesthetic integration'
    ],
    specs: [
      { label: 'Materials', value: 'Aluminum, Glass, Fabric' },
      { label: 'Coverage', value: 'Up to 100m²' },
      { label: 'Wind Resistance', value: 'Up to 120 km/h' },
      { label: 'Control', value: 'Manual / Motorized' },
      { label: 'Warranty', value: '7 years' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop',
    ]
  },
  {
    id: '6',
    slug: 'office-partitions',
    title: 'Office Partitions',
    description: 'Modern office partition systems for creating functional, aesthetic workspaces. From glass walls to acoustic panels.',
    image: 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=800&h=600&fit=crop',
    features: [
      'Modular design',
      'Easy reconfiguration',
      'Acoustic properties',
      'Cable management',
      'Glass or solid panels',
      'Quick installation'
    ],
    specs: [
      { label: 'Height', value: '2.4m - 3.6m' },
      { label: 'Panel Types', value: 'Glass, Gypsum, Fabric' },
      { label: 'Acoustic Rating', value: 'Up to 42dB' },
      { label: 'Finish', value: 'Powder coated / Anodized' },
      { label: 'Installation', value: 'Floor to ceiling' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    ]
  },
];
