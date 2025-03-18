import React from "react";

function Navbar() {
  return (
    <nav className="bg-[var(--color-vert)] fixed top-0 left-0 w-full z-20 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-[var(--color-beige)] text-2xl font-bold">Yannise-A</div>
        <ul className="flex space-x-8">
          <li>
            <a href="#hero" className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg">
              Accueil
            </a>
          </li>
          <li>
            <a href="#skills" className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[var(--color-beige)] hover:text-[var(--color-orange)] transition-colors text-lg">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
