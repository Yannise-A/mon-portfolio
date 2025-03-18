// src/components/Contact.jsx
import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/yannise-arbane/",
    icon: <FaLinkedinIn className="text-[#0077B5]" />,
    text: "in/yannise-arbane",
    type: "other", // bouton entièrement cliquable
  },
  {
    label: "GitHub",
    link: "https://github.com/Yannise-A",
    icon: <FaGithub className="text-black" />,
    text: "Yannise-A",
    type: "other", // bouton entièrement cliquable
  },
  {
    label: "Email",
    link: "mailto:yannise.arbane@gmail.com",
    icon: <FaEnvelope className="text-[#D44638]" />,
    text: "yannise.arbane@gmail.com",
    type: "email", // icône cliquable uniquement
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center bg-[var(--color-beige)] text-[var(--color-vert)]"
    >
      <h2 className="text-4xl font-bold mb-8">Me Contacter</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((contact) => {
          // ***** CAS 1 : Email => seule l'icône est cliquable *****
          if (contact.type === "email") {
            return (
              <div
                key={contact.label}
                className="
                  group relative flex items-center
                  h-24 max-w-[6rem] overflow-hidden
                  bg-[var(--color-vert)] text-[var(--color-beige)]
                  rounded-lg shadow-lg
                  transition-all duration-500 ease-in-out
                  sm:hover:max-w-[30rem]
                  origin-left
                "
              >
                {/* Bloc icône : 6rem de large, centrée */}
                <div className="flex-shrink-0 w-24 h-24 text-5xl flex items-center justify-center">
                  <a
                    href={contact.link}
                    title={contact.label}
                    className="
                      w-full h-full flex items-center justify-center
                      hover:text-[var(--color-orange)]
                      transition-colors
                    "
                  >
                    {contact.icon}
                  </a>
                </div>
                {/* Zone texte : affiché au survol uniquement en desktop */}
                <div
                  className="
                    flex-grow h-24 flex items-center
                    opacity-0 sm:group-hover:opacity-100
                    transition-all duration-500 ease-in-out
                    pr-6
                  "
                >
                  <span className="text-2xl font-medium whitespace-nowrap">
                    {contact.text}
                  </span>
                </div>
              </div>
            );
          }

          // ***** CAS 2 : LinkedIn / GitHub => tout le bouton est cliquable *****
          return (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative flex items-center
                h-24 max-w-[6rem] overflow-hidden
                bg-[var(--color-vert)] text-[var(--color-beige)]
                rounded-lg shadow-lg
                transition-all duration-500 ease-in-out
                sm:hover:max-w-[30rem]
                origin-left
              "
            >
              {/* Bloc icône : 6rem de large, centrée */}
              <div className="
                flex-shrink-0 w-24 h-24 text-5xl
                flex items-center justify-center
                hover:text-[var(--color-orange)]
                transition-colors
              ">
                {contact.icon}
              </div>
              {/* Zone texte : affiché au survol uniquement en desktop */}
              <div
                className="
                  flex-grow h-24 flex items-center
                  opacity-0 sm:group-hover:opacity-100
                  transition-all duration-500 ease-in-out
                  pr-6
                "
              >
                <span className="text-2xl font-medium whitespace-nowrap">
                  {contact.text}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
