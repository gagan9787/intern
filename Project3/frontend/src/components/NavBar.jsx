import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-white">
          VillageConnect
        </h1>
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4`}
        >
          <a
            href="/"
            className="block md:inline-block px-4 py-2 text-white hover:bg-blue-700/50 rounded-lg transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/services"
            className="block md:inline-block px-4 py-2 text-white hover:bg-blue-700/50 rounded-lg transition-colors duration-200"
          >
            Services
          </a>
        </div>
      </div>
    </nav>
  );
}