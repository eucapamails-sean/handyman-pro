export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Handyman<span className="text-brand-600">Pro</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-brand-600 transition-colors text-sm font-medium">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-brand-600 transition-colors text-sm font-medium">Why Us</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 transition-colors text-sm font-medium">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-600 transition-colors text-sm font-medium">Contact</a>
          </nav>
          <a
            href="tel:+14075551234"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            (407) 555-1234
          </a>
        </div>
      </div>
    </header>
  );
}
