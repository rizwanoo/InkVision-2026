import { Artwork, Artist, FlashItem, Testimonial } from '../types';

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    title: 'The Obsidian Dragon & Celestial Web',
    category: 'blackwork',
    categoryLabel: 'Dark Blackwork & Geometry',
    image: '/hero/hero-blackwork-dragon.jpg',
    artist: 'Kaelen Thorne',
    artistId: 'kaelen',
    estimatedHours: '8-10 hrs (2 sessions)',
    painLevel: 3,
    placement: 'Full Back & Shoulder Spine',
    description: 'Intricate blackwork composition intertwining mythical dragon scales with high-contrast sacred geometry and negative-space accents.',
    isHealedAvailable: true,
  },
  {
    id: 'art-2',
    title: 'Serpentine Flora & Gothic Petals',
    category: 'fineline',
    categoryLabel: 'Fine-Line & Botanical',
    image: '/tattoo-artwork/floating-snake-tattoo.jpg',
    artist: 'Elena Vane',
    artistId: 'elena',
    estimatedHours: '4-5 hrs',
    painLevel: 2,
    placement: 'Forearm / Outer Thigh',
    description: 'Executed with 0.15mm single-needle precision. Features an organic coiled viper passing through botanical roses with delicate stipple shading.',
    isHealedAvailable: true,
  },
  {
    id: 'art-3',
    title: 'Macro Needle & Ink Stipple Study',
    category: 'realism',
    categoryLabel: 'Micro-Realism & Textures',
    image: '/gallery/macro-needle-precision.jpg',
    artist: 'Maya Sterling',
    artistId: 'maya',
    estimatedHours: '3.5 hrs',
    painLevel: 2,
    placement: 'Inner Bicep / Ankle',
    description: 'Photographic fidelity highlighting the exact pigment deposit depth and microscopic gradient control used in our studio.',
    isHealedAvailable: true,
  },
  {
    id: 'art-4',
    title: 'Gothic Skull & Sacred Thorn Dagger',
    category: 'blackwork',
    categoryLabel: 'Dark Blackwork & Geometry',
    image: '/flash-sheets/gothic-flash-sheet.jpg',
    artist: 'Kaelen Thorne',
    artistId: 'kaelen',
    estimatedHours: '5-6 hrs',
    painLevel: 3,
    placement: 'Sternum / Calf',
    description: 'Architectural dark symmetry combining 16th-century engraving aesthetics with modern heavy carbon saturation.',
    isHealedAvailable: true,
  },
  {
    id: 'art-5',
    title: 'Healed Botanical Peony & Vine Canopy',
    category: 'fineline',
    categoryLabel: 'Fine-Line & Botanical',
    image: '/tattoo-artwork/botanical-peony.jpg',
    artist: 'Elena Vane',
    artistId: 'elena',
    estimatedHours: '6 hrs (1 session)',
    painLevel: 2,
    placement: 'Shoulder Blade to Collarbone',
    description: 'Soft charcoal gradients and razor-thin contour lines that flow naturally with the human clavicle bone structure.',
    isHealedAvailable: true,
  },
  {
    id: 'art-6',
    title: 'Fluid Smoke & Ink Suspensions',
    category: 'irezumi',
    categoryLabel: 'Dark Irezumi & Mythos',
    image: '/ink-assets/ink-particle-cloud.jpg',
    artist: 'Kenzo Mori',
    artistId: 'kenzo',
    estimatedHours: '7-9 hrs',
    painLevel: 4,
    placement: 'Ribcage & Side Torso',
    description: 'Organic flow-field ink movement simulating sumi-e wash pigments moving across natural muscle contours.',
    isHealedAvailable: false,
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'elena',
    name: 'Elena Vane',
    role: 'Master of Fine-Line & Botanical Anatomy',
    experience: '9 Years Professional Craft',
    specialty: '0.15mm Single Needle · Flora & Fauna · Micro-Linework',
    avatar: '/artists/master-artist-elena.jpg',
    bio: 'Former architectural draftsman turned body artist. Elena is renowned worldwide for delicate botanical compositions that age gracefully over decades with zero ink blowouts.',
    bookingStatus: 'Booking for November 2026',
    instagram: '@elena.vane.ink',
    hourlyRate: 280,
  },
  {
    id: 'kaelen',
    name: 'Kaelen Thorne',
    role: 'Lead Artisan of Dark Blackwork & Geometry',
    experience: '12 Years Master Artisan',
    specialty: 'Heavy Blackwork · Sacred Geometry · Gothic Engraving',
    avatar: '/studio/cinematic-workspace.jpg',
    bio: 'Trained in traditional European woodcut techniques. Kaelen specializes in bold negative-space narratives and heavy solid black saturation with medical-grade precision.',
    bookingStatus: 'Booking for December 2026',
    instagram: '@kaelen.thorne.dark',
    hourlyRate: 320,
  },
  {
    id: 'kenzo',
    name: 'Kenzo Mori',
    role: 'Senior Irezumi & Contemporary Mythos Artist',
    experience: '15 Years Traditional & Modern',
    specialty: 'Sumi-e Gradients · Japanese Dragons · Organic Waves',
    avatar: '/tattoo-machines/tattoo-machine-metallic.jpg',
    bio: 'Bridging timeless Tokyo woodblock mastery with modern ergonomic rotary machinery. Known for custom large-scale sleeves and full backpiece narratives.',
    bookingStatus: '2 Slots Remaining for Winter',
    instagram: '@kenzo.mori.atelier',
    hourlyRate: 350,
  },
  {
    id: 'maya',
    name: 'Maya Sterling',
    role: 'Micro-Realism & Fine Texture Specialist',
    experience: '8 Years Contemporary Fine Art',
    specialty: 'Photorealistic Portraits · Micro-Sculptures · Stipple Gray',
    avatar: '/gallery/macro-needle-precision.jpg',
    bio: 'Graduated from Florence Classical Art Academy. Maya treats the epidermis as a living canvas, creating museum-quality realism that stands the test of time.',
    bookingStatus: 'Booking for January 2027',
    instagram: '@maya.sterling.art',
    hourlyRate: 300,
  }
];

export const FLASH_ITEMS: FlashItem[] = [
  {
    id: 'flash-1',
    title: 'Ouroboros Serpent & Midnight Rose',
    series: 'Autumn 2026 Collection',
    price: 650,
    size: '6.5" x 3.5"',
    image: '/tattoo-artwork/floating-snake-tattoo.jpg',
    status: 'available',
    artist: 'Elena Vane',
  },
  {
    id: 'flash-2',
    title: 'Gothic Obsidian Dagger with Thorns',
    series: 'Occult Nocturne IV',
    price: 520,
    size: '5.0" x 2.2"',
    image: '/flash-sheets/gothic-flash-sheet.jpg',
    status: 'available',
    artist: 'Kaelen Thorne',
  },
  {
    id: 'flash-3',
    title: 'Imperial Dragon Claw & Crest',
    series: 'Tokyo Mythos Solo Study',
    price: 850,
    size: '8.0" x 5.0"',
    image: '/hero/hero-blackwork-dragon.jpg',
    status: 'claimed',
    artist: 'Kenzo Mori',
  },
  {
    id: 'flash-4',
    title: 'Botanical Clavicle Bloom Sequence',
    series: 'Living Garden Study',
    price: 580,
    size: '5.5" x 3.0"',
    image: '/tattoo-artwork/botanical-peony.jpg',
    status: 'available',
    artist: 'Elena Vane',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Alexander Hayes',
    city: 'New York, NY',
    quote: 'Elena crafted a full botanical forearm piece for me. One year later, the 0.15mm needle lines look as crisp and refined as day one. The hospital-grade studio and private acoustic booth made a 6-hour session completely peaceful.',
    artist: 'Elena Vane',
    style: 'Fine-Line Botanical',
    healedTime: '1 Year Healed',
    rating: 5,
  },
  {
    id: 't-2',
    clientName: 'Julian Rousseau',
    city: 'Paris, France',
    quote: 'Flew in from Paris specifically for Kaelen’s blackwork. The saturation is impossibly deep, yet healed with zero scarring or trauma to the skin. Obsidian Atelier sets the absolute benchmark for luxury body art worldwide.',
    artist: 'Kaelen Thorne',
    style: 'Heavy Blackwork',
    healedTime: '6 Months Healed',
    rating: 5,
  },
  {
    id: 't-3',
    clientName: 'Sophia Lin',
    city: 'San Francisco, CA',
    quote: 'The consultation and custom design process felt like commissioning a piece at a high-end art gallery. Maya worked with my arm anatomy perfectly. Outstanding hygiene standards and transparent pricing.',
    artist: 'Maya Sterling',
    style: 'Micro-Realism',
    healedTime: '8 Months Healed',
    rating: 5,
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How do initial consultations and custom design commissions work?',
    answer: 'We begin with a 30-minute private consultation (in-person at our SoHo Atelier or via private video call). You share your concept, anatomy placement, and reference aesthetics. Your chosen Master Artist drafts custom 1-of-1 conceptual artwork tailored specifically to your body contours before your appointment date.'
  },
  {
    question: 'What are your sterilization and hygiene protocols?',
    answer: 'Our atelier operates under Class 10,000 cleanroom sterilization standards. We exclusively utilize 100% single-use, sterile surgical needle cartridges, medical autoclave equipment, barrier films, and pure organic carbon vegan pigments certified heavy-metal free.'
  },
  {
    question: 'What is your deposit and cancellation policy?',
    answer: 'A $150–$300 non-refundable booking deposit is required to secure your appointment slot and cover initial custom artwork preparation. Deposits are applied directly toward your final tattoo balance. We allow one reschedule with at least 72 hours prior notice.'
  },
  {
    question: 'Do you provide medical-grade aftercare kits?',
    answer: 'Yes. Every client receives a complimentary Obsidian Aftercare Box containing second-skin breathable medical film (Saniderm), fragrance-free organic botanical healing balm, and a detailed 14-day healing protocol.'
  },
  {
    question: 'Can I claim available 1-of-1 Flash designs?',
    answer: 'Yes. Flash designs in our Vault are strictly 1-of-1; once claimed and tattooed, the design is archived and never replicated on another client. You can reserve available flash directly through our Flash Vault section with an instant deposit.'
  }
];
