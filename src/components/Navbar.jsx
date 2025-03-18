// src/components/Navbar.jsx
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--color-vert)] fixed top-0 left-0 w-full z-20 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-[var(--color-beige)] text-2xl font-bold">
          Yannise-A
        </div>

        {/* Bouton hamburger pour mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--color-beige)] focus:outline-none"
          >
            {isOpen ? (
              // Icône X (fermer)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icône hamburger (trois barres)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu de navigation pour desktop */}
        <ul className="hidden sm:flex space-x-8">
          <li>
            <a
              href="#hero"
              className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg"
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Menu déroulant pour mobile */}
      {isOpen && (
        <div className="sm:hidden">
          <ul className="flex flex-col space-y-2 px-6 pb-4">
            <li>
              <a
                href="#hero"
                className="block text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
