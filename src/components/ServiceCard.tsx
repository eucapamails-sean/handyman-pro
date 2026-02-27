import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  features: string[];
  showFeatures?: boolean;
}

export default function ServiceCard({ id, icon, title, shortDesc, features, showFeatures = false }: ServiceCardProps) {
  return (
    <div
      id={id}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 scroll-mt-32"
    >
      <span className="text-4xl block mb-3" aria-hidden="true">{icon}</span>
      <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{shortDesc}</p>
      {showFeatures && (
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              {f}
            </li>
          ))}
        </ul>
      )}
      <Link href="/contact" className="text-primary-500 font-semibold text-sm hover:text-primary-700 transition-colors">
        Get a Quote →
      </Link>
    </div>
  );
}
