// Complete Modern & Professional Specialty Coffee Data & Visual Assets

export const SIGNATURE_ITEM = {
  id: 'sig-01',
  name: 'BROWN SUGAR SEA SALT LATTE',
  subtitle: 'The Signature Creation',
  tagline: 'Coffee, Crafted Slowly',
  description: 'Our signature blend of double espresso, organic brown sugar glaze, and creamy sea salt foam. A delicate balance of rich espresso warmth, subtle sweetness, and a silky savory finish.',
  price: '32K',
  image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
  stats: {
    origin: 'Single Origin Gayo Highland (1600m)',
    temp: '93°C Precision Extraction',
    roast: 'Medium Roast',
    notes: ['Brown Sugar', 'Sea Salt Foam', 'Belgian Cocoa', 'Vanilla Bean']
  },
  layers: [
    { title: 'Velvet Foam', text: 'Nitrogen-Infused Creamy Sea Salt Foam' },
    { title: 'Espresso Core', text: 'Handcrafted Double Shot Arabica Blend' },
    { title: 'Caramel Base', text: 'Organic Caramelized Brown Sugar Glaze' }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'ALL MENU' },
  { id: 'signatures', name: 'SIGNATURE' },
  { id: 'coffee', name: 'COFFEE' },
  { id: 'non-coffee', name: 'NON-COFFEE' },
  { id: 'tea', name: 'TEA' },
  { id: 'pastry', name: 'PASTRY' }
];

export const MENU_ITEMS = [
  // COFFEE
  {
    id: 'c-01',
    category: 'coffee',
    name: 'Espresso',
    desc: 'Rich & bold double shot extracted at 9 bar pressure',
    price: '25K',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Medium-Dark Roast',
      acidity: 'Low & Mellow',
      sweetness: 'Medium',
      body: 'Full & Heavy',
      origin: 'Toraja Kalosi & Gayo Highland',
      extractionTime: '27 seconds',
      flavorNotes: ['Dark Chocolate', 'Toasted Hazelnut', 'Molasses']
    }
  },
  {
    id: 'c-02',
    category: 'coffee',
    name: 'Americano',
    desc: 'Smooth & balanced espresso lengthened with heated mineral water',
    price: '28K',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Medium Roast',
      acidity: 'Medium & Crisp',
      sweetness: 'Balanced',
      body: 'Clean & Refined',
      origin: 'Single Origin Flores Bajawa',
      extractionTime: 'Water filtered at 88°C',
      flavorNotes: ['Citrus Zest', 'Floral Honey', 'Mild Cocoa']
    }
  },
  {
    id: 'c-03',
    category: 'coffee',
    name: 'Café Latte',
    desc: 'Creamy & mellow with silky steamed micro-foam milk',
    price: '32K',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Medium Roast',
      acidity: 'Low',
      sweetness: 'High',
      body: 'Smooth & Creamy',
      origin: 'Gayo Organic Arabica',
      extractionTime: 'Steamed micro-foam at 65°C',
      flavorNotes: ['Sweet Milk', 'Butterscotch', 'Caramel']
    }
  },
  {
    id: 'c-04',
    category: 'coffee',
    name: 'Cappuccino',
    desc: 'Rich milk foam crowned with a delicate dusting of roasted cocoa',
    price: '32K',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Medium Dark',
      acidity: 'Low',
      sweetness: 'Medium',
      body: 'Rich & Airy',
      origin: 'Java Preanger Specialty',
      extractionTime: '1:1:1 Equal Espresso, Milk & Foam ratio',
      flavorNotes: ['Cocoa Dust', 'Warm Spice', 'Malt']
    }
  },

  // SIGNATURE
  {
    id: 'sig-01',
    category: 'signatures',
    name: 'Brown Sugar Sea Salt Latte',
    desc: 'Espresso, organic brown sugar & creamy sea salt foam',
    price: '32K',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'House Roast',
      acidity: 'Balanced',
      sweetness: 'Rich & Creamy',
      body: 'Layered Texture',
      origin: 'Aceh Gayo Organic',
      extractionTime: 'Handcrafted espresso extraction',
      flavorNotes: ['Sea Salt Foam', 'Brown Sugar Glaze', 'Velvet Vanilla']
    }
  },
  {
    id: 'sig-02',
    category: 'signatures',
    name: 'Smoked Oak Cold Brew',
    desc: '24-hour slow cold brew infused with botanical oak mist',
    price: '38K',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Dark Smoked',
      acidity: 'Low',
      sweetness: 'Subtle Honey',
      body: 'Heavy & Smooth',
      origin: 'Toraja Single Origin',
      extractionTime: '24-hour slow filtration',
      flavorNotes: ['Oak Wood', 'Dark Plum', '70% Cocoa']
    }
  },

  // NON-COFFEE
  {
    id: 'nc-01',
    category: 'non-coffee',
    name: 'Belgian Dark Chocolate',
    desc: '72% Belgian dark chocolate blended with warm oat milk',
    price: '32K',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Non-Caffeine',
      acidity: 'None',
      sweetness: 'Rich Dark',
      body: 'Velvety Smooth',
      origin: 'Callebaut Belgium',
      extractionTime: 'Steamed at 68°C',
      flavorNotes: ['Fudge Chocolate', 'Toasted Oat', 'Vanilla']
    }
  },
  {
    id: 'nc-02',
    category: 'non-coffee',
    name: 'Uji Matcha Latte',
    desc: 'Ceremonial grade Japanese Uji Matcha with vanilla cloud milk',
    price: '34K',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Ceremonial Tea',
      acidity: 'Umami Fresh',
      sweetness: 'Gentle Cream',
      body: 'Dense & Smooth',
      origin: 'Kyoto Uji Japan',
      extractionTime: 'Bamboo whisked at 75°C',
      flavorNotes: ['Rich Umami', 'Pistachio', 'Vanilla']
    }
  },

  // TEA
  {
    id: 't-01',
    category: 'tea',
    name: 'Sakura Peach Blossom',
    desc: 'Japanese cherry blossom green tea misted with white peach',
    price: '28K',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Green Tea',
      acidity: 'Floral Light',
      sweetness: 'Subtle Peach',
      body: 'Light & Airy',
      origin: 'Shizuoka Japan',
      extractionTime: 'Steeped for 3 mins at 80°C',
      flavorNotes: ['Sakura Petals', 'White Peach', 'Spring Dew']
    }
  },
  {
    id: 't-02',
    category: 'tea',
    name: 'Bergamot Earl Grey',
    desc: 'Bergamot infused black tea with roasted orange citrus notes',
    price: '26K',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    details: {
      roast: 'Black Tea',
      acidity: 'Citrus Fresh',
      sweetness: 'Honeyed Zest',
      body: 'Medium',
      origin: 'Darjeeling Estate',
      extractionTime: 'Steeped for 4 mins at 95°C',
      flavorNotes: ['Calabrian Bergamot', 'Dried Zest', 'Wildflower']
    }
  },

  // PASTRY
  {
    id: 'p-01',
    category: 'pastry',
    name: 'French Butter Croissant',
    desc: 'Crisp, multi-layered French butter pastry baked fresh daily',
    price: '22K',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    details: {
      type: 'Artisanal Bakery',
      allergens: ['Gluten', 'Dairy'],
      bakingTime: 'Baked fresh daily at 07:00 & 13:00',
      flavorNotes: ['AOP French Butter', 'Crisp Flakes', 'Honeycomb Interior']
    }
  },
  {
    id: 'p-02',
    category: 'pastry',
    name: 'Pain Au Chocolat',
    desc: 'Valrhona dark chocolate baton wrapped in flaky croissant dough',
    price: '25K',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
    details: {
      type: 'Dark Chocolate Pastry',
      allergens: ['Gluten', 'Dairy'],
      bakingTime: 'Baked fresh daily',
      flavorNotes: ['Valrhona 64%', 'Buttery Layers', 'Golden Crust']
    }
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g-01',
    title: 'THE SHOP INTERIOR',
    category: 'SHOP',
    subtitle: 'Warm minimalist ambiance & natural light',
    span: 'col-span-1 md:col-span-2 row-span-2',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-02',
    title: 'PRECISION COFFEE',
    category: 'COFFEE',
    subtitle: 'Double shot espresso extraction at 9 bar',
    span: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-03',
    title: 'OUR BARISTA',
    category: 'BARISTA',
    subtitle: 'Handcrafting every cup with intention',
    span: 'col-span-1 row-span-2',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-04',
    title: 'COFFEE BEANS',
    category: 'DETAIL',
    subtitle: 'Ethically sourced volcanic highland beans',
    span: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-05',
    title: 'INTERIOR AMBIANCE',
    category: 'INTERIOR',
    subtitle: 'A quiet space designed to slow down & connect',
    span: 'col-span-1 md:col-span-2 row-span-1',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80'
  }
];

export const BRAND_STORY = {
  title: "More Than Just Coffee",
  subtitle: "COFFEE MADE WITH INTENTION.",
  paragraphs: [
    "PureBrew.co was born from a passion to create a welcoming space where specialty coffee meets intentional living. In a fast-paced world, we built a warm sanctuary to slow down.",
    "We believe coffee brings people together. That is why we source single-origin highland beans directly from ethical farmers and roast them with extreme care to bring out their natural sweetness and character."
  ],
  stats: [
    { label: "Bean Origin", value: "100% ARABICA" },
    { label: "Highland Elevation", value: "1600M" },
    { label: "Batch Roasting", value: "SMALL BATCH" },
    { label: "Craft Intention", value: "100%" }
  ]
};

export const LOCATION_DATA = {
  name: "PureBrew.co",
  address: "Jl. Pamanukan No.12, Antapani Kulon, Kec. Antapani, Kota Bandung, Jawa Barat 40291",
  status: "OPEN NOW",
  hours: [
    { days: "Mon – Fri", time: "08:00 — 22:00" },
    { days: "Sat – Sun", time: "07:00 — 23:00" }
  ],
  contact: {
    email: "hello@purebrew.co",
    phone: "+62 812 3456 7890",
    whatsapp: "https://wa.me/6281234567890",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    maps: "https://maps.google.com/?q=Jl.+Pamanukan+No.12+Antapani+Kulon+Bandung"
  }
};
