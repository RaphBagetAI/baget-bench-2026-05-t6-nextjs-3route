import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center mt-12">
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h1 className="font-sora text-5xl font-extrabold mb-6 leading-tight">
          Shipyard: Deploy developer tools faster with confidence
        </h1>
        <p className="text-xl max-w-lg mb-8">
          Streamline your deployment workflows with Shipyard. Powerful, reliable, and 
          designed for developers who demand speed and control.
        </p>
        <a 
          href="/pricing" 
          className="inline-block bg-teal text-white px-8 py-4 rounded-lg shadow-playful-teal font-semibold text-lg hover:bg-teal/90 transition"
        >
          Get Started
        </a>
      </div>

      {/* Decorative geometric shapes in the right column */}
      <div className="lg:w-1/2 relative flex justify-center">
        {/* Large circle with peach color, rotated */}
        <div className="absolute bg-peach w-56 h-56 rounded-full rotate-[30deg] shadow-playful-peach z-0 top-24"></div>
        {/* Smaller teal circle overlapping */}
        <div className="absolute bg-teal w-36 h-36 rounded-full -rotate-[15deg] shadow-playful-teal z-10 top-32 left-28"></div>
        {/* Triangle shape with violet color on the right side */}
        <div
          className="absolute w-0 h-0 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-l-[120px] border-l-violet opacity-80 z-20 top-24 left-48"
          style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
        ></div>
        {/* Main hero image placeholder as a geometric abstract */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-30 w-48 h-48"
        >
          <circle cx="100" cy="100" r="80" stroke="#4C1D95" strokeWidth="12" />
          <rect x="70" y="70" width="60" height="60" fill="#14B8A6" rx="12" />
          <circle cx="100" cy="100" r="40" fill="#FBBF77" />
        </svg>
      </div>
    </section>
  );
}
