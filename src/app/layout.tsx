import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Handyman Pro Orlando | Trusted Home Repair & Maintenance',
  description: 'Orlando\'s top-rated handyman service. Licensed, insured, and ready to tackle any home repair. Book your free estimate today!',
  keywords: 'handyman Orlando, home repair Orlando, handyman service near me, Orlando home maintenance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
