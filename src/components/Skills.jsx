// src/components/Skills.jsx
import React, { useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiGodotengine,
  SiGit,
  SiCmake,
  SiOpengl,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPhp,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";

const categoriesData = [
  {
    id: "software",
    title: "Software Development",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Godot", icon: <SiGodotengine /> },
      { name: "Git", icon: <SiGit /> },
      { name: "CMake", icon: <SiCmake /> },
    ],
  },
  {
    id: "graphics",
    title: "Computer Graphics",
    skills: [
      { name: "OpenGL", icon: <SiOpengl /> },
      { name: "GL4D", icon: null },
      { name: "SDL", icon: null },
      { name: "SFML", icon: null },
    ],
  },
  {
    id: "frontend",
    title: "Front-end Web",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },
  {
    id: "backend",
    title: "Back-end Web",
    skills: [
      { name: "NodeJS", icon: <SiNodedotjs /> },
      { name: "ExpressJS", icon: <SiExpress /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "PHP", icon: <SiPhp /> },
    ],
  },
  {
    id: "design",
    title: "Design",
    skills: [
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("software");

  const activeCategory = categoriesData.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <section className="py-20 bg-[var(--color-beige)] text-[var(--color-vert)]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Mes Compétences</h2>
        <div className="flex flex-col md:flex-row md:items-start">
          {/* Colonne gauche : liste des catégories */}
          <div className="md:w-1/4 mb-4 md:mb-0 md:mr-4">
            {categoriesData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-4 py-2 rounded-lg mb-2 transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[var(--color-orange)] text-[var(--color-beige)] font-semibold"
                    : "bg-[var(--color-vert)] text-[var(--color-beige)] hover:bg-[var(--color-rouge)]"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          {/* Zone droite : affichage des skills de la catégorie sélectionnée */}
          <div className="md:w-3/4 bg-[var(--color-vert)] rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-beige)]">
              {activeCategory?.title}
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              {activeCategory?.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center w-20">
                  <div className="text-4xl mb-2 text-[var(--color-beige)]">
                    {skill.icon || (
                      <span className="text-sm italic text-[var(--color-rouge)]">
                        No Icon
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-[var(--color-beige)]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
