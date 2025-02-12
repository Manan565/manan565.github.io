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
    <div className="container mx-auto px-6 py-10">
      {/* About Me Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Text Content */}
        <div>
          <h1 className="text-5xl font-bold mb-6">ABOUT ME</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            I am a driven and aspiring software developer with a passion for
            transforming innovative ideas into user-friendly software solutions.
            Currently serving as a Front End Web Developer at CJSF 90.1 FM, I
            excel at working collaboratively within a team. I thrive on tackling
            complex challenges, expanding my skill set, and fostering meaningful
            connections.
          </p>
        </div>

        {/* Right Side: Skills & Sections */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          {/* Section Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            {["skills", "certification", "education"].map((section) => (
              <button
                key={section}
                className={`px-5 py-2 rounded-md font-medium transition-all ${
                  activeSection === section
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="mt-4">
            {/* CERTIFICATIONS SECTION */}
            {activeSection === "certification" && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Certifications
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>AI 2 ECTS Credit Course</li>
                </ul>
              </div>
            )}

            {/* SKILLS SECTION */}
            {activeSection === "skills" && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skillsData.map((category) => (
                  <div
                    key={category.category}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">
                      {category.category}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center space-y-2"
                        >
                          {skill.icon}
                          <p className="text-sm text-gray-700">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EDUCATION SECTION */}
            {activeSection === "education" && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Education
                </h2>
                <div className="text-gray-700">
                  <p className="font-medium">Simon Fraser University</p>
                  <p>BSc in Computer Science</p>
                  <p className="text-sm text-gray-500">
                    September 2023 - Present
                  </p>
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
