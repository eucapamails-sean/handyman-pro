export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get Your Free Estimate
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Tell us about your project and we&apos;ll get back to you within 2 hours with a free, no-obligation quote.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg">☎️</div>
                <div>
                  <div className="text-sm text-blue-300">Call us anytime</div>
                  <a href="tel:+14075551234" className="text-lg font-semibold hover:text-accent-500 transition-colors">(407) 555-1234</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg">✉️</div>
                <div>
                  <div className="text-sm text-blue-300">Email us</div>
                  <a href="mailto:info@handymanpro-orlando.com" className="text-lg font-semibold hover:text-accent-500 transition-colors">info@handymanpro-orlando.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg">📍</div>
                <div>
                  <div className="text-sm text-blue-300">Service area</div>
                  <div className="text-lg font-semibold">Orlando &amp; Central Florida</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg">🕐</div>
                <div>
                  <div className="text-sm text-blue-300">Hours</div>
                  <div className="text-lg font-semibold">Mon&ndash;Sat: 7AM &ndash; 7PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="(407) 555-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="general">General Repairs</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="painting">Painting</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="assembly">Assembly &amp; Mounting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors resize-none"
                  placeholder="Tell us what you need help with..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
              >
                Request Free Estimate →
              </button>
              <p className="text-xs text-gray-500 text-center">No spam. We&apos;ll respond within 2 hours during business hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
