import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

type Developer = {
  name: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
  description: string;
  expertise: string[];
};

const Developers = () => {
  const developers: Developer[] = [
    {
      name: "Dexter Louie Aniez",
      image: "/portfolio/developers/me.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/louieaniez",
        github: "https://github.com/LodiAniez",
        facebook: "https://www.facebook.com/louieaniez/",
      },
      description:
        "I’m a full-stack developer with 5+ years of experience, specializing in TypeScript frameworks for both backend and frontend. As the founder of Quantum Code Solutions, I’m passionate about software development and mentoring others. I thrive in leadership roles, guiding teams and delivering high-quality solutions, all while viewing programming as both a career and a hobby.",
      expertise: [
        "JavaScript",
        "Web Development",
        "Node.js",
        "Typescript",
        "Mobile App Development",
        "Backend Development",
      ],
    },
    {
      name: "Alejandro Oletres",
      image: "/portfolio/developers/al.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/alejandro-oletres-jr-329471221/",
        github: "https://github.com/alOletres",
        facebook: "https://www.facebook.com/ale.oletres",
      },
      description:
        "I’m a full-stack developer with over 3 years of experience, skilled in both frontend and backend development, as well as mobile app development. I’m passionate about exploring new technologies and continuously expanding my skill set.",
      expertise: [
        "JavaScript",
        "Typescript",
        "Mobile App Development",
        "Web Development",
        "Backend Development",
      ],
    },
    {
      name: "Nicko Balboa",
      image: "/portfolio/developers/nicko.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nicko-balboa-5251581ba/",
        github: "https://github.com/NBalboa",
        facebook: "https://www.facebook.com/ni.c.ko.73744",
      },
      description:
        "I'm a full-stack developer passionate about both frontend and backend, constantly learning and evolving. For me, programming is more than a job—it's a hobby I love.",
      expertise: [
        "JavaScript",
        "Typescript",
        "Web Development",
        "PHP",
        "Backend Development",
      ],
    },
    {
      name: "Gerlan Dorona",
      image: "/portfolio/developers/gerlan.jpg",
      socialLinks: {
        github: "https://github.com/lanzy-lanzy",
        facebook: "https://www.facebook.com/lanzgerlan",
      },
      description:
        "I am a skilled full-stack developer specializing in Python Django for backend development and templates with Tailwind CSS for frontend design. I build robust, scalable web applications with a focus on efficiency, security, and seamless user experience,",
      expertise: [
        "Python",
        "Web Development",
        "Mobile App Development",
        "Backend Development",
      ],
    },
    {
      name: "Robinson Landiao",
      image: "/portfolio/developers/robinson.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/Binson041798",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      expertise: ["Wordpress", "Wix", "Web Development", "Web Design"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? developers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-r from-black to-gray-900 py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        id="developers"
        className="min-h-[calc(100vh-4rem)] flex flex-col items-center text-[#E0E0E0]"
      >
        <div className="min-h-[4rem] flex items-center justify-center text-6xl text-center">
          Meet our Developers
        </div>
        <div className="flex items-center min-h-[calc(100vh-8rem)] w-full">
          <div className="relative w-full flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 p-4 text-4xl opacity-10 hover:opacity-none transition-all duration-300 cursor-pointer"
            >
              &#10094;
            </button>
            <div className="flex-shrink-0 flex flex-col items-center p-4 rounded-lg w-full transition-opacity duration-500 ease-in-out">
              <img
                src={developers[currentIndex].image}
                alt={developers[currentIndex].name}
                className="w-30 h-30 rounded-full mb-4"
              />
              <label htmlFor="name" className="pb-4 font-bold">
                {developers[currentIndex].name}
              </label>
              <div className="flex gap-4 mb-4">
                {developers[currentIndex].socialLinks.linkedin && (
                  <a
                    href={developers[currentIndex].socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </a>
                )}
                {developers[currentIndex].socialLinks.github && (
                  <a
                    href={developers[currentIndex].socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                  </a>
                )}
                {developers[currentIndex].socialLinks.facebook && (
                  <a
                    href={developers[currentIndex].socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                  </a>
                )}
              </div>
              <div className="text-center mb-4 max-w-9/10">
                <p>{developers[currentIndex].description}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {developers[currentIndex].expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 p-4 text-4xl opacity-10 hover:opacity-none transition-all duration-300 cursor-pointer"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
