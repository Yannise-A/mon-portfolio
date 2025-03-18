// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-[var(--color-vert)] text-[var(--color-beige)] py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Yannise-A. Tous droits réservés.
        </p>
        <p className="text-xs mt-2">
          Ce site est sous licence{" "}
          <a
            href="https://github.com/Yannise-A/mon-portfolio/blob/main/LICENSE.md"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--color-orange)]"
          >
            MIT
          </a>.
        </p>
        <p className="text-xs mt-2">
          Conçu et développé par Yannise Arbane.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
