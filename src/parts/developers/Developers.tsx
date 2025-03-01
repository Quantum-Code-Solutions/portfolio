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
  role: string;
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
      role: "Fullstack Developer | Founder",
    },
    {
      name: "Alejandro Oletres",
      image: "/portfolio/developers/al.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/alejandro-oletres-jr-329471221/",
        github: "https://github.com/alOletres",
        facebook: "https://www.facebook.com/ale.oletres",
      },
      role: "Fullstack Developer",
    },
    {
      name: "Nicko Balboa",
      image: "/portfolio/developers/nicko.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nicko-balboa-5251581ba/",
        github: "https://github.com/NBalboa",
        facebook: "https://www.facebook.com/ni.c.ko.73744",
      },
      role: "Fullstack Developer",
    },
    {
      name: "Gerlan Dorona",
      image: "/portfolio/developers/gerlan.jpg",
      socialLinks: {
        github: "https://github.com/lanzy-lanzy",
        facebook: "https://www.facebook.com/lanzgerlan",
      },
      role: "Fullstack Developer",
    },
    {
      name: "Robinson Landiao",
      image: "/portfolio/developers/robinson.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/Binson041798",
      },
      role: "Wordpress Developer",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-r from-black to-gray-900 py-6">
      <div
        id="developers"
        className="min-h-[calc(100vh-4rem)] flex flex-col items-center text-[#E0E0E0] justify-center"
      >
        <div className="min-h-[4rem] flex items-center justify-center text-6xl text-center">
          Meet our Developers
        </div>
        <div
          id="grid"
          className="flex justify-between gap-4 flex-wrap w-full p-4 mt-4 overflow-x-auto md:overflow-visible"
        >
          {developers.map((developer, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-800 bg-opacity-50 flex-1 min-w-[200px]"
            >
              <div className="relative mb-4">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="w-30 h-30 rounded-full border-2 border-white p-[2px]"
                />
              </div>
              <label htmlFor="name" className="pb-1 font-bold text-center">
                {developer.name}
              </label>
              <div className="text-center mb-4 max-w-9/10 text-xs">
                <p>{developer.role}</p>
              </div>
              <div className="flex gap-4">
                {developer.socialLinks.linkedin && (
                  <a
                    href={developer.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </a>
                )}
                {developer.socialLinks.github && (
                  <a
                    href={developer.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                  </a>
                )}
                {developer.socialLinks.facebook && (
                  <a
                    href={developer.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
