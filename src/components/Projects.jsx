// src/components/Projects.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
// Icônes
import { FaGithub, FaPlay } from "react-icons/fa";

// Vos données de projets
const projectsData = [
  {
    id: 1,
    year: "2022",
    title: "Maze Generator (2022)",
    description:
      "Python maze generator project that utilizes exhaustive search algorithms.",
    image: "https://i.imgur.com/yE9g4pM.png",
    tags: ["Python", "Algorithms"],
    github: "https://github.com/Yannise-A/Maze_Generator",
    demo: null,
  },
  {
    id: 2,
    year: "2024",
    title: "HaruHana: Learn Japanese kana",
    description: "An app to learn Japanese kana!",
    image: "https://i.imgur.com/1ObVVWV.png",
    tags: ["React", "Japanese"],
    github: "https://github.com/Yannise-A/HaruHana",
    demo: null,
  },
  {
    id: 3,
    year: "2024",
    title: "Show Your ELO: Faceit Stats",
    description:
      "A platform to showcase your performance on Faceit, perfect for streamers.",
    image: "https://i.imgur.com/bA79J7D.png",
    tags: ["NodeJS", "API"],
    github: "https://github.com/Yannise-A/Faceit-Stats",
    demo: "https://yannise-a.fr/build/",
  },
  {
    id: 4,
    year: "2022",
    title: "PHP Forum",
    description:
      "A fully functional forum built with PHP featuring user authentication and interactive discussions.",
    image: "https://i.imgur.com/814zF4n.png",
    tags: ["PHP", "Forum"],
    github: "https://github.com/Yannise-A/PHP-Forum",
    demo: "https://yannise-a.fr/forum/",
  },
  {
    id: 5,
    year: "2022",
    title: "Leboncoin Clone",
    description:
      "A PHP-based clone of Leboncoin with a simple and intuitive interface.",
    image: "https://i.imgur.com/mTe7Jnp.png",
    tags: ["PHP", "Clone"],
    github: "https://github.com/Yannise-A/Leboncoin-Clone",
    demo: "https://yannise-a.fr/leboncoin/",
  },
];

function Projects() {
  const cardsRef = useRef([]);

  // Animation GSAP pour l’apparition des cartes
  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-[var(--color-vert)] text-[var(--color-beige)]"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Mes Projets
        </h2>

        <div className="space-y-8">
          {projectsData.map((project, index) => {
            // Alterne l’ordre image/texte
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`
                  relative flex flex-col
                  ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}
                  bg-[var(--color-vert2)]
                  rounded-xl shadow-xl
                  transition-transform duration-300
                  hover:scale-[1.01]
                  // Pas d'overflow-hidden sur la carte pour que les tooltips sortent
                  overflow-visible
                `}
              >
                {/* Badge date */}
                {project.year && (
                  <div
                    className={`
                      absolute top-3
                      ${isReversed ? "left-3" : "right-3"}
                      bg-[var(--color-rouge)]
                      text-[var(--color-beige)]
                      px-3 py-1
                      text-sm font-semibold
                      rounded-full
                      shadow
                    `}
                  >
                    {project.year}
                  </div>
                )}

                {/* Conteneur image avec overflow-hidden uniquement ici */}
                <div
                  className="
                    md:w-1/2
                    max-h-64 md:max-h-none
                    overflow-hidden
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      hover:scale-110
                    "
                  />
                </div>

                {/* Contenu */}
                <div
                  className={`
                    md:w-1/2 p-6 flex flex-col
                    ${isReversed ? "items-end text-right" : ""}
                  `}
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div
                      className={`
                        flex flex-wrap gap-2 mt-3
                        ${isReversed ? "justify-end" : ""}
                      `}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            bg-[var(--color-beige)]/20
                            px-2 py-1 text-xs
                            rounded-full
                            transition-colors
                            hover:bg-[var(--color-beige)]/40
                            cursor-pointer
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Icônes GitHub / Play */}
                  <div
                    className={`
                      mt-4 flex items-center gap-5
                      ${isReversed ? "justify-end" : ""}
                    `}
                  >
                    {/* Icône GitHub + tooltip */}
                    {project.github && (
                      <div className="relative group overflow-visible">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-gray-300 hover:text-gray-100"
                        >
                          <FaGithub />
                        </a>
                        <div
                          className="
                            absolute top-full left-1/2 -translate-x-1/2
                            mt-2 px-3 py-1
                            text-sm text-white
                            bg-gray-700
                            whitespace-nowrap
                            rounded-md
                            hidden group-hover:block
                            z-50
                            after:content-[''] after:absolute
                            after:left-1/2 after:-translate-x-1/2
                            after:top-0 after:-mt-[6px]
                            after:border-[6px] after:border-transparent
                            after:border-b-gray-700
                          "
                        >
                          See the code
                        </div>
                      </div>
                    )}

                    {/* Icône Play + tooltip */}
                    {project.demo && (
                      <div className="relative group overflow-visible">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-green-400 hover:text-green-200"
                        >
                          <FaPlay />
                        </a>
                        <div
                          className="
                            absolute top-full left-1/2 -translate-x-1/2
                            mt-2 px-3 py-1
                            text-sm text-white
                            bg-green-600
                            whitespace-nowrap
                            rounded-md
                            hidden group-hover:block
                            z-50
                            after:content-[''] after:absolute
                            after:left-1/2 after:-translate-x-1/2
                            after:top-0 after:-mt-[6px]
                            after:border-[6px] after:border-transparent
                            after:border-b-green-600
                          "
                        >
                          Test the program
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
