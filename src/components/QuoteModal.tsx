'use client';

import { useState } from 'react';
import { services, siteConfig } from '@/data/content';

interface QuoteModalProps {
  onClose: () => void;
}

export default function QuoteModal({ onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, this would POST to an API route
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request a free quote"
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-heading font-bold text-primary-600">Get a Free Quote</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <span className="text-5xl block mb-4" aria-hidden="true">✅</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">
                We&apos;ll get back to you within 24 hours with your free estimate.
              </p>
              <p className="text-sm text-gray-500">
                Need it sooner? Call us at{' '}
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary-500 font-semibold">
                  {siteConfig.phone}
                </a>
              </p>
              <button onClick={onClose} className="btn-primary mt-6">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(407) 555-0000"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                <select
                  id="quote-service"
                  name="service"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-message" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Project</label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us what you need help with..."
                />
              </div>
              <button type="submit" className="btn-accent w-full text-lg py-3">
                📩 Request Free Quote
              </button>
              <p className="text-xs text-gray-500 text-center">
                Or call us directly:{' '}
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-primary-500 font-semibold">
                  {siteConfig.phone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
