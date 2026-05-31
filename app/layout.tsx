import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipyard by Bench',
  description: 'Developer tools for fast, reliable deployment workflows',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-lavender font-karla text-violet min-h-screen flex flex-col">
        <header className="bg-white shadow-playful-violet fixed top-0 w-full z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="font-sora text-2xl font-bold text-violet hover:text-teal transition">
              Shipyard
            </Link>
            <ul className="flex space-x-8 font-medium text-violet">
              <li>
                <Link href="/" className="hover:text-teal transition">Home</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-teal transition">Pricing</Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-teal transition">Docs</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="pt-20 flex-grow max-w-7xl mx-auto w-full px-6">
          {children}
        </main>

        <footer className="bg-white mt-12 py-8 text-center text-violet font-karla text-sm">
          &copy; 2026 Bench. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
