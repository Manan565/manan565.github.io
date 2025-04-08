import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiStrapi,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPycharm,
  SiGooglecloud,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      {
        name: "Python",
        icon: <FaPython size={35} className="text-blue-600" />,
      },
      {
        name: "C/C++",
        icon: <SiCplusplus size={35} className="text-gray-700" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs size={35} className="text-yellow-400" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 size={35} className="text-orange-600" />,
      },
      { name: "CSS3", icon: <FaCss3Alt size={35} className="text-blue-500" /> },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: <SiReact size={35} className="text-blue-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={35} className="text-black" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs size={35} className="text-green-600" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={35} className="text-gray-700" />,
      },
      {
        name: "Strapi",
        icon: <SiStrapi size={35} className="text-indigo-600" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={35} className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={35} className="text-green-600" />,
      },
      { name: "MySQL", icon: <SiMysql size={35} className="text-blue-600" /> },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={35} className="text-red-600" /> },
      {
        name: "PyCharm",
        icon: <SiPycharm size={35} className="text-green-700" />,
      },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud size={35} className="text-yellow-500" />,
      },
    ],
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="container mx-auto px-0 sm:px-4 py-12 max-w-7xl">
      {/* Left-aligned header with less container padding */}
      <div className="mb-12 pl-4">
        <h1 className="text-5xl font-bold mb-2 text-black">ABOUT ME</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side: Text Content - spans 2 columns */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-orange-100 flex flex-col justify-center">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Recently I was part of the{" "}
            <span className="font-semibold text-orange-600">
              SFU stormforge program
            </span>{" "}
            where I was mentored by industry professionals and led the
            development of <span className="font-semibold">Resumate</span> (AI
            powered job application and resume tool).
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I am a driven and aspiring software developer with a passion for
            transforming innovative ideas into user-friendly software solutions.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Last Fall, I was serving as a{" "}
            <span className="font-semibold text-orange-600">
              Web Developer at CJSF 90.1 FM
            </span>
            , I worked in creating components using Next.js and was part of the
            initial designs of the website.
          </p>
        </div>

        {/* Right Side: Skills & Sections - spans 3 columns */}
        <div className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg border border-orange-100">
          {/* Section Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            {["skills", "certification", "education"].map((section) => (
              <button
                key={section}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === section
                    ? "bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="mt-6">
            {/* CERTIFICATIONS SECTION */}
            {activeSection === "certification" && (
              <div className="p-6 bg-white rounded-xl shadow-sm border border-orange-100 transform transition-all duration-500">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                  Certifications
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
                    <span className="text-gray-700">
                      Elements of AI 2 ECTS Credit Course
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {/* SKILLS SECTION */}
            {activeSection === "skills" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transform transition-all duration-500">
                {skillsData.map((category) => (
                  <div
                    key={category.category}
                    className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-all"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-orange-600 border-b border-orange-100 pb-2">
                      {category.category}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-orange-50 transition-colors"
                        >
                          {skill.icon}
                          <p className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EDUCATION SECTION */}
            {activeSection === "education" && (
              <div className="p-6 bg-white rounded-xl shadow-sm border border-orange-100 transform transition-all duration-500">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                  Education
                </h2>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl font-bold">
                      SFU
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-800">
                      Simon Fraser University
                    </p>
                    <p className="text-gray-700">BSc in Computer Science</p>
                    <p className="text-sm text-gray-500 mt-1">
                      September 2023 - Present
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
