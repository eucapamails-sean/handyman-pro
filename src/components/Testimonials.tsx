const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Winter Park, FL',
    text: 'They fixed our kitchen faucet and mounted three TVs in the same visit. Professional, fast, and cleaned up after themselves. Will definitely call again!',
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Lake Nona, FL',
    text: 'Had a long list of small repairs that I had been putting off for months. They knocked everything out in one afternoon at a very fair price.',
    rating: 5,
  },
  {
    name: 'Maria G.',
    location: 'Dr. Phillips, FL',
    text: 'The deck was starting to rot and I was worried about safety. They replaced the bad boards, re-stained the whole thing, and it looks brand new.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t take our word for it &mdash; hear from real Orlando homeowners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent-500 text-xl">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
