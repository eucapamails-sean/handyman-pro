'use client';

import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 btn-accent rounded-full px-5 py-4 text-lg shadow-2xl pulse-animation"
        aria-label="Request a free quote"
      >
        📝 Get Free Quote
      </button>
      {isOpen && <QuoteModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
