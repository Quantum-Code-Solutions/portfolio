import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#1a1a1a] shadow-md" : "bg-[#121212]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[#B0B0B0]">
              Quantum Code Solutions
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#what-we-do"
              className="text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              What we do
            </a>
            <a
              href="#developers"
              className="text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Developers
            </a>
            <a href="#projects" className="text-[#E0E0E0] hover:text-[#B0B0B0]">
              Projects
            </a>
            <a
              href="#contact-us"
              className="text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Contact us
            </a>
            <a
              href="#testimonials"
              className="text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Testimonials
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#what-we-do"
              className="block text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              What we do
            </a>
            <a
              href="#developers"
              className="block text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Developers
            </a>
            <a
              href="#projects"
              className="block text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Projects
            </a>
            <a
              href="#contact-us"
              className="block text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Contact us
            </a>
            <a
              href="#testimonials"
              className="block text-[#E0E0E0] hover:text-[#B0B0B0]"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
