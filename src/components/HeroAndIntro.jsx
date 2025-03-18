// src/components/HeroAndIntro.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";

// Vanta + three
import FOG from "vanta/dist/vanta.fog.min"; 
import * as THREE from "three";

function HeroAndIntro() {
  const heroRef = useRef(null);
  const vantaRef = useRef(null);

  // Références pour le texte
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    // Initialiser l’effet Vanta FOG au montage
    vantaRef.current = FOG({
      el: heroRef.current,
      THREE: THREE,
      highlightColor: 0xE07A5F,
      midtoneColor: 0x690B22,
      lowlightColor: 0x1B4D3E,
      baseColor: 0xF1E3D3,
      blurFactor: 0.5,
      speed: 1.0,
      zoom: 1.0,
    });

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <>
      {/* Section Hero */}
      <section
        ref={heroRef}
        id="hero"
        className="h-screen w-full text-white flex flex-col justify-center items-center relative overflow-hidden"
      >
        {/* Contenu hero, au-dessus de l’animation => z-10 */}
        <div className="w-full px-4 text-center relative z-10">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            Bonjour, je suis <span className="text-[var(--color-orange)]">Yannise Arbane</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-200 mb-8"
            style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
          >
            Développeur Web Frontend passionné, étudiant en 3ᵉ année d’informatique
            à l’Université Paris 8. À la recherche d’une alternance.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-[var(--color-orange)] hover:bg-[var(--color-rouge)] text-[var(--color-beige)] px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="bg-[var(--color-vert)] hover:bg-[var(--color-verthover)] text-[var(--color-beige)] px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Section Who Am I? */}
      <section
        ref={introRef}
        id="whoami"
        className="w-full bg-[var(--color-beige)] text-[var(--color-vert)] py-40 px-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="text-left flex-1">
            <h2 className="text-5xl font-bold mb-8">Who Am I?</h2>
            <p className="text-lg mb-6">
              Je suis <span className="font-bold">Yannise Arbane</span>, étudiant en 3ᵉ année d’informatique à l’Université Paris 8.
            </p>
            <p className="text-lg mb-6">
              Passionné par le <span className="font-bold">développement web</span>, la <span className="font-bold">cybersécurité</span>, 
              et l’<span className="font-bold">intelligence artificielle</span>, 
              je cherche constamment à améliorer mes compétences et à explorer de nouvelles technologies.
            </p>
            <p className="text-lg mb-6">
              Actuellement en quête d’une <span className="font-bold">alternance en développement web et cybersécurité</span>, 
              je souhaite approfondir mes compétences en <span className="font-bold">React, PHP, administration système Linux</span>, 
              et intégrer des pratiques avancées en <span className="font-bold">sécurité informatique</span> et <span className="font-bold">IA appliquée</span>.
            </p>
            <p className="text-lg">
              Mon objectif est d’évoluer dans un environnement dynamique où je pourrai 
              relever de nouveaux défis et participer à des projets innovants.
            </p>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/37779450?v=4"
            alt="Photo de profil de Yannise Arbane"
            className="w-60 h-60 rounded-full border-4 border-[var(--color-rouge)] shadow-lg"
          />
        </div>
      </section>
    </>
  );
}

export default HeroAndIntro;
