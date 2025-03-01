import { useState } from "react";
import { Sections } from "../../constants/section";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    if (id === Sections.WhatWeDo) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[#B0B0B0]">
              Quantum Code Solutions
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              onClick={() => scrollToSection("what-we-do")}
              className="text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              What we do
            </a>
            <a
              onClick={() => scrollToSection("developers")}
              className="text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Developers
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact-us")}
              className="text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Contact us
            </a>
            <a
              onClick={() => scrollToSection("testimonials")}
              className="text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollToSection("community")}
              className="text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Community
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
              onClick={() => scrollToSection("what-we-do")}
              className="block text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              What we do
            </a>
            <a
              onClick={() => scrollToSection("developers")}
              className="block text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Developers
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="block text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact-us")}
              className="block text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Contact us
            </a>
            <a
              onClick={() => scrollToSection("testimonials")}
              className="block text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollToSection("community")}
              className="block text-[#E0E0E0] hover:text-[#B0B0B0] cursor-pointer"
            >
              Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
