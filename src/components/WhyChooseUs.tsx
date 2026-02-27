const reasons = [
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed in the state of Florida with comprehensive liability insurance for your peace of mind.',
    icon: 'shield',
  },
  {
    title: 'Same-Day Service',
    description: 'Emergency repairs? We offer same-day and next-day availability throughout Orlando.',
    icon: 'bolt',
  },
  {
    title: 'Upfront Pricing',
    description: 'No hidden fees, no surprises. You get a clear quote before we start any work.',
    icon: 'dollar',
  },
  {
    title: 'Satisfaction Guaranteed',
    description: "Not happy with the work? We'll come back and make it right \u2014 free of charge.",
    icon: 'check',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Orlando Homeowners Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just handymen &mdash; we&apos;re your neighbors, committed to keeping Orlando homes in top shape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 p-6 rounded-xl bg-brand-50 border border-brand-100"
            >
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">
                  {reason.icon === 'shield' && '\u{1F6E1}'}
                  {reason.icon === 'bolt' && '\u26A1'}
                  {reason.icon === 'dollar' && '$'}
                  {reason.icon === 'check' && '\u2713'}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
