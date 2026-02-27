interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export default function TestimonialCard({ name, location, rating, text, service }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">&ldquo;{text}&rdquo;</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <span className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded-full">{service}</span>
      </div>
    </div>
  );
}
