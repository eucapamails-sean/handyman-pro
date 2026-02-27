const services = [
  {
    title: 'General Repairs',
    description: 'Drywall patching, door fixes, squeaky floors, and all those small jobs that add up.',
    icon: '\ud83d\udd27',
  },
  {
    title: 'Plumbing',
    description: 'Faucet repairs, toilet fixes, garbage disposals, and minor pipe work.',
    icon: '\ud83d\udebf',
  },
  {
    title: 'Electrical',
    description: 'Light fixtures, ceiling fans, outlet replacements, and smart home installations.',
    icon: '\ud83d\udca1',
  },
  {
    title: 'Painting',
    description: 'Interior & exterior painting, touch-ups, accent walls, and cabinet refinishing.',
    icon: '\ud83c\udfa8',
  },
  {
    title: 'Carpentry',
    description: 'Shelving, trim work, deck repairs, fence fixing, and custom built-ins.',
    icon: '\ud83e\ude9a',
  },
  {
    title: 'Assembly & Mounting',
    description: 'Furniture assembly, TV mounting, curtain rods, and picture hanging.',
    icon: '\ud83d\udcfa',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No job too small, no project too complex. We bring professional-grade skill to every task.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
