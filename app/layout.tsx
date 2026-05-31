import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipyard by Bench',
  description: 'Developer tools for modern teams — Shipyard platform by Bench.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-darkSlate">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="font-heading text-2xl font-bold text-gradientStart hover:text-gradientMid transition">
                Shipyard
              </Link>
              <ul className="flex space-x-8 font-body text-darkSlate">
                <li>
                  <Link href="/" className="hover:text-gradientMid transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-gradientMid transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-gradientMid transition">
                    Docs
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-grow max-w-7xl mx-auto px-6 py-10">
            {children}
          </main>

          <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 py-6 mt-16 text-center text-sm font-body text-darkSlate">
            © 2026 Bench. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
