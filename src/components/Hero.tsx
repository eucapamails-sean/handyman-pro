export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent-500">Serving Orlando & Central Florida</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Trusted Local{' '}
            <span className="text-accent-500">Handyman</span> Service
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl">
            From leaky faucets to full renovations &mdash; we handle every home repair with skill, speed, and a satisfaction guarantee. Licensed &amp; insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg shadow-accent-500/25"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:+14075551234"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/25 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call Now
            </a>
          </div>
          <div className="flex items-center gap-8 mt-10 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-accent-500 font-bold text-lg">500+</span> Jobs Completed
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-500 font-bold text-lg">4.9</span> Google Rating
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-500 font-bold text-lg">10+</span> Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
