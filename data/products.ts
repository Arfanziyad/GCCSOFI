import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'washroom-cubicles',
    title: 'Washroom Cubicles',
    description: 'Venesta HPL washroom cubicles designed to enhance aesthetic appeal and durability through innovative products and exceptional quality.',
    image: '/products/washroom-cubicles/venesta1.png',
    features: [
      'Moisture resistant MDF core with HPL',
      'ABS lipping',
      'Aluminum headrail',
      'Stainless steel fittings',
      'Anti-finger hinges',
      'Emergency release',
      '34 finishes',
      'Available panel sizes: 35mm and 44mm',
      'Variants: Centurion, Aqueous, Sylan, Urban Award, Splash, Lollipop'
    ],
    specs: [
      { label: 'Core', value: 'Moisture resistant MDF core with HPL' },
      { label: 'Lipping', value: 'ABS lipping' },
      { label: 'Headrail', value: 'Aluminum headrail' },
      { label: 'Fittings', value: 'Stainless steel fittings' },
      { label: 'Panel Sizes', value: '35mm, 44mm' },
    ],
    gallery: [
      '/products/washroom-cubicles/venesta1.png',
      '/products/washroom-cubicles/venesta2.png',
      '/products/washroom-cubicles/venesta3.png',
    ],
    brandPartner: {
      name: 'Venesta',
      logo: '/brands/venesta-logo.png',
      tagline: 'Authorised distributor for the Kingdom of Saudi Arabia',
    },
  },
  {
    id: '2',
    slug: 'alifu-cubicles',
    title: 'Alifu Cubicles',
    description: 'Alifu cubicles with SGL honeycomb panels and HPL surfaces, built for durability with tested hardware and optional stainless steel finish.',
    image: '/products/alifu-cubicles/alifu1.png',
    features: [
      '3mm HPL',
      'Aluminum edge',
      'Optional stainless steel finish',
      'Invisible brackets',
      'Durable hinges',
      'Soft-close system',
      '1,000,000 cycle tested'
    ],
    specs: [
      { label: 'Panel', value: '25mm SGL honeycomb panels' },
      { label: 'Surface', value: '3mm HPL' },
      { label: 'Edge', value: 'Aluminum edge' },
      { label: 'Finish', value: 'Optional stainless steel finish' },
      { label: 'Accessories', value: 'Stainless steel hinges, locks, hooks' },
    ],
    gallery: [
      '/products/alifu-cubicles/alifu1.png',
      '/products/alifu-cubicles/alifu2.png',
      '/products/alifu-cubicles/alifu3.png',
      '/products/alifu-cubicles/alifu4.png',
      '/products/alifu-cubicles/alifu5.png',
    ]
  },
  {
    id: '3',
    slug: 'ips-panels-v-epps',
    title: 'IPS Panels (V-EPPS)',
    description: 'A precision engineered pre-plumbed system designed to be customizable while combining aesthetic value with practical performance.',
    image: '/products/ips-panels-v-epps/pps1.png',
    features: [
      'Precision engineered',
      'Customizable',
      'Aesthetic + practical'
    ],
    specs: [
      { label: 'System', value: 'Pre-plumbed system (V-EPPS)' },
      { label: 'Engineering', value: 'Precision engineered' },
      { label: 'Configuration', value: 'Customizable' },
      { label: 'Design', value: 'Aesthetic + practical' },
    ],
    gallery: [
      '/products/ips-panels-v-epps/pps1.png',
      '/products/ips-panels-v-epps/pps2.png',
      '/products/ips-panels-v-epps/pps3.png',
    ]
  },
  {
    id: '4',
    slug: 'lockers',
    title: 'HPL Lockers and Benches',
    description: 'Venesta HPL lockers and benches available in single, double, and L-shape formats with practical storage accessories and base options.',
    image: '/products/lockers/hpl1.png',
    features: [
      'Single, double, L-shape',
      'With hanger rod and coat hook',
      'Steel or concrete base'
    ],
    specs: [
      { label: 'Types', value: 'Single, double, L-shape' },
      { label: 'Accessories', value: 'Hanger rod and coat hook' },
      { label: 'Base', value: 'Steel or concrete base' },
    ],
    gallery: [
      '/products/lockers/hpl1.png',
      '/products/lockers/hpl2.png',
    ],
    brandPartner: {
      name: 'Venesta',
      logo: '/brands/venesta-logo.png',
      tagline: 'Authorised distributor for the Kingdom of Saudi Arabia',
    },
  },
  {
    id: '5',
    slug: 'glass-partitions',
    title: 'Glass Partitions',
    description: 'Frameless, acoustic-rated, modular office partition systems available in single and double glazed options.',
    image: '/products/glass-partitions/glasspart1.png',
    features: [
      'Frameless',
      'Acoustic-rated',
      'Modular',
      'Single & double glazed',
      'Smart glass options'
    ],
    specs: [
      { label: 'Single Glazed', value: '10-12 mm glass' },
      { label: 'Single Glazed Acoustic Rating', value: 'Up to 41 dB' },
      { label: 'Double Glazed', value: '6-10 mm layers' },
      { label: 'Double Glazed Acoustic Rating', value: 'Up to 45 dB' },
      { label: 'Options', value: 'Smart glass options' },
    ],
    gallery: [
      '/products/glass-partitions/glasspart1.png',
      '/products/glass-partitions/glasspart2.png',
      '/products/glass-partitions/glasspart3.png',
    ],
    brandPartner: {
      name: 'ABCD International',
      logo: '/brands/abcd-international-logo.png',
      tagline: 'Authorised distributor for the Kingdom of Saudi Arabia',
    },
  },
  {
    id: '6',
    slug: 'movable-partitions',
    title: 'Movable Partitions',
    description: 'Acoustic movable wall systems from Europe, including remote stacking, center stacking, fully automatic, and vertical folding solutions.',
    image: '/products/movable-partitions/mvpart1.png',
    features: [
      'Acoustic movable walls (EU)',
      'Remote stacking',
      'Center stacking',
      'Fully automatic',
      'Vertical folding',
      '5th generation tech'
    ],
    specs: [
      { label: 'Center Stacking Acoustic Rating', value: '42-57 dB' },
      { label: 'Fully Automatic Acoustic Rating', value: '40-57 dB' },
      { label: 'Operation', value: 'Remote stacking / center stacking / fully automatic / vertical folding' },
      { label: 'Technology', value: '5th generation tech' },
    ],
    gallery: [
      '/products/movable-partitions/mvpart1.png',
      '/products/movable-partitions/mvpart2.png',
      '/products/movable-partitions/mvpart3.png',
      '/products/movable-partitions/mvpart4.png',
      '/products/movable-partitions/mvpart5.png',
      '/products/movable-partitions/mvpart6.png',
    ],
    brandPartner: {
      name: 'PCTS MovableWalls',
      logo: '/brands/pcts-movablewalls-logo.png',
      tagline: 'Authorised distributor for the Kingdom of Saudi Arabia',
    },
  },
  {
    id: '7',
    slug: 'raised-floor',
    title: 'Raised Floor',
    description: 'Modular raised floor systems available in steel, calcium sulphate, and wood core options for heavy load applications.',
    image: '/products/raised-floor/rf1.png',
    features: [
      'Steel / Calcium sulphate / Wood core',
      'Modular',
      'Heavy load capable'
    ],
    specs: [
      { label: 'Core Options', value: 'Steel / Calcium sulphate / Wood core' },
      { label: 'Format', value: 'Modular' },
      { label: 'Load Performance', value: 'Heavy load capable' },
      { label: 'Available Variants', value: 'Steel Raised Access, Calcium Sulphate Raised Access, Wood Core Raised Access' },
    ],
    gallery: [
      '/products/raised-floor/rf1.png',
      '/products/raised-floor/rf2.png',
      '/products/raised-floor/rf3.png',
    ]
  },
];
