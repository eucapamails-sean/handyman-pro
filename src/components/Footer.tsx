export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold text-white">Handyman<span className="text-brand-500">Pro</span></span>
            <p className="mt-3 text-sm">
              Orlando&apos;s most trusted handyman service. Licensed, insured, and dedicated to quality craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">General Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Plumbing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Electrical</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpentry</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Orlando</li>
              <li>Winter Park</li>
              <li>Lake Nona</li>
              <li>Dr. Phillips</li>
              <li>Kissimmee</li>
              <li>Windermere</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Handyman Pro Orlando. All rights reserved.</p>
          <p className="text-sm">Licensed &amp; Insured | FL License #HM-12345</p>
        </div>
      </div>
    </footer>
  );
}
