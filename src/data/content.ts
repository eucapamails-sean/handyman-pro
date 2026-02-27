/* ============================================================
   CONTENT DATA FILE — Edit this file to update all site content
   ============================================================ */

export const siteConfig = {
  name: 'Handyman Pro Orlando',
  tagline: 'Your Trusted Local Handyman in Orlando, FL',
  phone: '(407) 555-0199',
  phoneRaw: '+14075550199',
  email: 'info@handymanproorlando.com',
  address: '123 Main Street, Orlando, FL 32801',
  hours: 'Mon–Sat: 7:00 AM – 7:00 PM | Sun: Emergency Only',
  yearFounded: 2015,
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.65073464698!2d-81.5089!3d28.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  socialLinks: {
    facebook: 'https://facebook.com/handymanproorlando',
    instagram: 'https://instagram.com/handymanproorlando',
    google: 'https://g.page/handymanproorlando',
    yelp: 'https://yelp.com/biz/handymanproorlando',
  },
};

export const services = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    icon: '🔧',
    shortDesc: 'Faucet repairs, leak fixes, toilet installations, and drain cleaning.',
    longDesc: 'From dripping faucets to full fixture replacements, our licensed plumbing team handles it all. We specialize in residential plumbing repairs, water heater maintenance, garbage disposal installation, and emergency leak detection throughout the Orlando metro area.',
    features: ['Faucet & fixture repair', 'Toilet installation', 'Drain cleaning', 'Leak detection', 'Water heater service'],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    icon: '⚡',
    shortDesc: 'Outlet installation, lighting fixtures, ceiling fans, and wiring repairs.',
    longDesc: 'Keep your home safe and well-lit with our professional electrical services. We install ceiling fans, light fixtures, GFCI outlets, dimmer switches, and handle minor wiring repairs. All work meets Florida electrical codes.',
    features: ['Light fixture installation', 'Ceiling fan mounting', 'Outlet & switch replacement', 'GFCI installation', 'Wiring repairs'],
  },
  {
    id: 'painting',
    title: 'Painting',
    icon: '🎨',
    shortDesc: 'Interior and exterior painting, drywall patching, and staining.',
    longDesc: 'Transform your space with professional painting services. We provide interior and exterior painting, accent walls, cabinet refinishing, drywall repair, and wood staining. We use premium paints rated for Florida\'s humid climate.',
    features: ['Interior painting', 'Exterior painting', 'Drywall patching', 'Cabinet refinishing', 'Wood staining'],
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    icon: '🪚',
    shortDesc: 'Shelving, trim work, door repairs, deck building, and custom woodwork.',
    longDesc: 'Quality craftsmanship for all your woodworking needs. From custom shelving and trim installation to door repairs and deck construction, our carpenters deliver precision work that lasts. We handle both interior and exterior projects.',
    features: ['Custom shelving', 'Trim & molding', 'Door repair & installation', 'Deck building & repair', 'Fence repair'],
  },
  {
    id: 'appliance-repair',
    title: 'Appliance Repair',
    icon: '🔩',
    shortDesc: 'Washer, dryer, dishwasher, and refrigerator troubleshooting and repair.',
    longDesc: 'Don\'t replace it — repair it! Our technicians diagnose and fix common household appliance issues including washers, dryers, dishwashers, and refrigerators. We work with all major brands and carry common replacement parts.',
    features: ['Washer & dryer repair', 'Dishwasher service', 'Refrigerator troubleshooting', 'Garbage disposal repair', 'Range hood installation'],
  },
  {
    id: 'furniture-assembly',
    title: 'Furniture Assembly',
    icon: '🪑',
    shortDesc: 'Expert assembly for IKEA, Wayfair, Amazon, and all flat-pack furniture.',
    longDesc: 'Skip the frustration of flat-pack furniture. Our assembly pros handle IKEA, Wayfair, Amazon, and all major furniture brands. We assemble desks, beds, bookshelves, outdoor furniture, and more — quickly and correctly.',
    features: ['IKEA assembly', 'Office furniture setup', 'Bed frame assembly', 'Bookshelf & storage units', 'Outdoor furniture'],
  },
  {
    id: 'home-maintenance',
    title: 'Home Maintenance',
    icon: '🏠',
    shortDesc: 'Pressure washing, gutter cleaning, weatherproofing, and seasonal upkeep.',
    longDesc: 'Keep your Orlando home in top shape year-round. Our maintenance services include pressure washing, gutter cleaning, caulking, weatherstripping, smoke detector installation, and seasonal home inspections to prevent costly repairs.',
    features: ['Pressure washing', 'Gutter cleaning', 'Caulking & weatherproofing', 'Smoke detector installation', 'General home repairs'],
  },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Winter Park, FL',
    rating: 5,
    text: 'Incredible service! They fixed our leaking kitchen faucet and installed a new ceiling fan in under two hours. Very professional and clean. Will definitely call again!',
    service: 'Plumbing & Electrical',
  },
  {
    name: 'James R.',
    location: 'Lake Nona, FL',
    rating: 5,
    text: 'Best handyman service in Orlando. They assembled all our IKEA furniture for our new apartment — fast, efficient, and everything was perfectly done. Highly recommend!',
    service: 'Furniture Assembly',
  },
  {
    name: 'Maria G.',
    location: 'Dr. Phillips, FL',
    rating: 5,
    text: 'We hired them for interior painting and the results were amazing. Great attention to detail, fair pricing, and they even helped us pick the right paint for Florida humidity.',
    service: 'Painting',
  },
  {
    name: 'David K.',
    location: 'Windermere, FL',
    rating: 5,
    text: 'Called for an emergency plumbing issue on a Saturday and they were here within an hour. Fixed the problem quickly and the price was very reasonable. Outstanding!',
    service: 'Plumbing',
  },
  {
    name: 'Linda T.',
    location: 'College Park, FL',
    rating: 5,
    text: 'They built custom shelving in our garage and repaired our back deck. The carpentry work is beautiful and sturdy. These guys really know what they\'re doing.',
    service: 'Carpentry',
  },
  {
    name: 'Robert & Ann W.',
    location: 'Baldwin Park, FL',
    rating: 5,
    text: 'Used Handyman Pro for a full home maintenance package — pressure washing, gutter cleaning, and caulking all windows. Our home looks brand new. Great value!',
    service: 'Home Maintenance',
  },
];

export const faqs = [
  {
    question: 'Do you charge for estimates?',
    answer: 'No! We offer free, no-obligation estimates for all jobs. Just give us a call or fill out our online quote form, and we\'ll provide a detailed estimate before any work begins.',
  },
  {
    question: 'Which Orlando areas do you serve?',
    answer: 'We serve all of Orlando and surrounding areas including Winter Park, Lake Nona, Dr. Phillips, Windermere, College Park, Baldwin Park, Kissimmee, and Altamonte Springs. If you\'re within 30 miles of downtown Orlando, we\'ve got you covered.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes! Handyman Pro Orlando is fully licensed and insured in the State of Florida. We carry general liability insurance and workers\' compensation for your complete peace of mind.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), checks, cash, Zelle, CashApp, and Venmo for your convenience.',
  },
  {
    question: 'How quickly can you start a project?',
    answer: 'For most jobs, we can schedule within 1–3 business days. For emergencies like plumbing leaks or electrical issues, we offer same-day service when available.',
  },
  {
    question: 'Do you offer a warranty on your work?',
    answer: 'Absolutely. All our work comes with a 90-day satisfaction guarantee. If something isn\'t right, we\'ll come back and fix it at no additional cost.',
  },
  {
    question: 'Can I get a senior or military discount?',
    answer: 'Yes! We proudly offer a 10% discount for seniors (65+) and active military/veterans. Just mention it when you call for your estimate.',
  },
];

export const aboutContent = {
  story: 'Handyman Pro Orlando was founded in 2015 with a simple mission: provide Orlando homeowners with reliable, affordable, and high-quality handyman services. What started as a one-man operation has grown into a trusted team of skilled professionals serving thousands of happy customers across the greater Orlando area.',
  mission: 'To deliver exceptional home repair and improvement services with honesty, skill, and respect for every customer\'s home and budget.',
  stats: [
    { label: 'Years in Business', value: '10+' },
    { label: 'Homes Serviced', value: '5,000+' },
    { label: 'Google Rating', value: '4.9★' },
    { label: 'Repeat Customers', value: '85%' },
  ],
  whyChooseUs: [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed in the State of Florida with comprehensive liability insurance for your protection.',
      icon: '🛡️',
    },
    {
      title: 'Experienced Professionals',
      description: 'Our team averages 15+ years of hands-on experience in residential repairs and improvements.',
      icon: '👷',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprise charges. You get a detailed quote before we start any work.',
      icon: '💰',
    },
    {
      title: 'Satisfaction Guaranteed',
      description: '90-day warranty on all work. If you\'re not happy, we\'ll make it right — no questions asked.',
      icon: '✅',
    },
    {
      title: 'Orlando Locals',
      description: 'We live and work in Orlando. We understand local building codes, weather challenges, and community needs.',
      icon: '🌴',
    },
    {
      title: 'Same-Day Service',
      description: 'Emergency repairs can\'t wait. We offer same-day service for urgent plumbing, electrical, and safety issues.',
      icon: '⚡',
    },
  ],
};

export const blogPosts = [
  {
    slug: 'orlando-home-maintenance-checklist',
    title: '10 Essential Home Maintenance Tasks Every Orlando Homeowner Should Do',
    excerpt: 'Living in Central Florida means unique home maintenance challenges. From hurricane prep to humidity control, here\'s your complete checklist.',
    date: '2025-12-15',
    category: 'Home Maintenance',
    readTime: '5 min read',
    content: '<p>Orlando\'s subtropical climate brings unique challenges for homeowners. High humidity, intense sun, and hurricane season all take their toll on your property. Here are the top 10 maintenance tasks you should never skip:</p><h3>1. Clean Your Gutters (Twice a Year)</h3><p>Florida\'s heavy rains can cause major water damage if gutters are clogged. Clean them in spring and fall to prevent foundation issues.</p><h3>2. Check Your HVAC System Monthly</h3><p>Your AC runs nearly year-round in Orlando. Replace filters monthly and schedule professional maintenance twice a year.</p><h3>3. Inspect and Seal Windows and Doors</h3><p>Florida\'s humidity can warp seals. Check caulking around all windows and doors annually to keep moisture and pests out.</p><h3>4. Pressure Wash Exterior Surfaces</h3><p>Mold and mildew grow fast in Orlando\'s humid climate. Pressure wash your driveway, sidewalks, and home exterior at least once a year.</p><h3>5. Test Smoke and Carbon Monoxide Detectors</h3><p>Test monthly and replace batteries twice a year. Replace the entire unit every 10 years.</p><h3>6. Inspect Your Roof</h3><p>Florida storms can loosen shingles and tiles. Inspect your roof after every major storm and at least twice a year.</p><h3>7. Maintain Your Lawn Sprinkler System</h3><p>Check sprinkler heads, adjust timers seasonally, and repair leaks promptly to conserve water and keep your lawn healthy.</p><h3>8. Service Your Water Heater</h3><p>Flush your water heater annually to remove sediment buildup and extend its lifespan.</p><h3>9. Check for Pest Entry Points</h3><p>Orlando is home to many pests. Seal cracks, repair screens, and keep vegetation trimmed away from your home.</p><h3>10. Hurricane Preparation</h3><p>Before hurricane season (June–November), stock supplies, trim trees, secure outdoor furniture, and know your evacuation route.</p><p><strong>Need help with any of these tasks?</strong> Handyman Pro Orlando is here to keep your home in top shape. Call us for a free estimate!</p>',
  },
  {
    slug: 'when-to-call-handyman-vs-diy',
    title: 'DIY vs. Hiring a Handyman: When to Call the Pros',
    excerpt: 'Not every home repair needs a professional — but some definitely do. Learn which jobs to tackle yourself and when to call a handyman.',
    date: '2025-11-28',
    category: 'Tips & Advice',
    readTime: '4 min read',
    content: '<p>We love DIY spirit, but some jobs are better left to the professionals. Here\'s how to decide:</p><h3>Great DIY Projects</h3><ul><li>Painting a single room</li><li>Replacing cabinet hardware</li><li>Installing curtain rods</li><li>Basic yard maintenance</li><li>Changing light bulbs and air filters</li></ul><h3>Call a Handyman</h3><ul><li>Electrical work (outlets, fixtures, fans)</li><li>Plumbing repairs (especially leaks)</li><li>Drywall repair larger than a nail hole</li><li>Door and window installation</li><li>Deck or fence repair</li><li>Any work requiring permits</li></ul><h3>The Cost of DIY Gone Wrong</h3><p>A botched plumbing job can cause thousands in water damage. Improper electrical work is a fire hazard. When in doubt, call a professional — it\'s almost always cheaper than fixing a DIY mistake.</p><p><strong>Not sure if your project needs a pro?</strong> Call Handyman Pro Orlando for a free consultation. We\'ll give you honest advice — even if it means telling you to do it yourself!</p>',
  },
  {
    slug: 'prepare-home-florida-hurricane-season',
    title: 'How to Prepare Your Orlando Home for Hurricane Season',
    excerpt: 'Hurricane season runs June through November. Here\'s how to protect your Orlando home before the storms arrive.',
    date: '2025-10-10',
    category: 'Seasonal',
    readTime: '6 min read',
    content: '<p>Living in Orlando means hurricane preparedness is essential. Here\'s your complete guide to getting your home storm-ready:</p><h3>Inspect Your Roof</h3><p>Look for loose, damaged, or missing shingles. Repair any issues before storm season begins. A compromised roof is the #1 cause of hurricane damage to homes.</p><h3>Trim Trees and Shrubs</h3><p>Remove dead branches and trim trees that hang over your roof or power lines. Flying debris causes significant damage during storms.</p><h3>Reinforce Windows and Doors</h3><p>Install hurricane shutters or have plywood pre-cut for all windows. Reinforce garage doors — they\'re often the first point of failure in high winds.</p><h3>Clear Gutters and Drains</h3><p>Ensure water can flow freely. Clogged gutters and drains cause flooding and foundation damage during heavy rains.</p><h3>Secure Outdoor Items</h3><p>Patio furniture, grills, planters, and decorations become projectiles in high winds. Store them inside or secure them firmly.</p><h3>Check Your Insurance</h3><p>Review your homeowner\'s insurance policy. Make sure you have adequate coverage for wind and flood damage.</p><p><strong>Need help preparing your home?</strong> Handyman Pro Orlando offers a complete Hurricane Prep Package. We\'ll inspect, repair, and secure your home so you can weather any storm with confidence.</p>',
  },
];
