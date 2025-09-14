import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaJava,
  FaAws,
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
  SiAngular,
  SiSpringboot,
  SiAmazons3,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      {
        name: "Python",
        icon: <FaPython size={28} className="text-orange-600" />,
      },
      {
        name: "Java",
        icon: <FaJava size={28} className="text-red-600" />,
      },
      {
        name: "C/C++",
        icon: <SiCplusplus size={28} className="text-gray-700" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs size={28} className="text-yellow-500" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 size={28} className="text-orange-600" />,
      },
      { 
        name: "CSS3", 
        icon: <FaCss3Alt size={28} className="text-orange-500" /> 
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { 
        name: "React", 
        icon: <SiReact size={28} className="text-orange-400" /> 
      },
      {
        name: "Angular",
        icon: <SiAngular size={28} className="text-red-600" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={28} className="text-gray-900" />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot size={28} className="text-green-600" />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs size={28} className="text-green-600" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={28} className="text-gray-700" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={28} className="text-orange-400" />,
      },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={28} className="text-green-600" />,
      },
      {
        name: "MySQL", 
        icon: <SiMysql size={28} className="text-orange-600" /> 
      },
      {
        name: "AWS",
        icon: <FaAws size={28} className="text-orange-500" />,
      },
      {
        name: "AWS S3",
        icon: <SiAmazons3 size={28} className="text-orange-600" />,
      },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud size={28} className="text-orange-500" />,
      },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { 
        name: "Git", 
        icon: <FaGitAlt size={28} className="text-orange-600" /> 
      },
      {
        name: "PyCharm",
        icon: <SiPycharm size={28} className="text-green-700" />,
      },
    ],
  },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        {/* Header - LEFT ALIGNED BLACK */}
        <div className="text-left mb-16 pl-4">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4">
              ABOUT ME
            </h1>
            <div className="h-1 w-24 bg-orange-600 rounded-full"></div>
          </div>
        </div>

        {/* Main content with modern grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side: Personal Story with modern card design */}
          <div className="xl:col-span-1">
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-orange-600 rounded-full"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm <span className="font-bold text-orange-600">Manan Mehta</span>, a Computer Science student at <span className="font-bold text-orange-600">Simon Fraser University</span> passionate about building technology that makes a meaningful impact. Currently pursuing my Bachelor's degree with an expected graduation in <span className="font-semibold">May 2027</span>, I've gained hands-on experience through internships at <span className="font-bold text-orange-600">Craft Silicon in Nairobi, Kenya</span>, and various projects that span full-stack development and AI integration.
                </p>
                
                <p className="text-lg">
                  My technical expertise centers around <span className="font-semibold text-orange-700">Java, Python, and JavaScript</span>, with experience in frameworks like <span className="font-semibold text-orange-700">Spring Boot, React, and Next.js</span>. I enjoy working across the entire development stack, from designing RESTful APIs and optimizing database queries to creating responsive user interfaces that serve thousands of users.                   Beyond coding, I'm actively involved in Simon Fraser University's entrepreneurial ecosystem, including participating in the competitive <span className="font-bold text-orange-600">StormForge incubator program</span>. 

                </p>
                
      
                
                
              </div>
            </div>
          </div>

          {/* Right Side: Interactive sections */}
          <div className="xl:col-span-2">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 lg:p-8">
              {/* Modern tab navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { key: "skills", label: "Skills", icon: "💻" },
                  { key: "certification", label: "Certification", icon: "🏆" },
                  { key: "education", label: "Education", icon: "🎓" }
                ].map((section) => (
                  <button
                    key={section.key}
                    className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeSection === section.key
                        ? "bg-orange-600 text-white shadow-lg"
                        : "bg-white/80 text-gray-700 border border-gray-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                    onClick={() => setActiveSection(section.key)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{section.icon}</span>
                      <span className="hidden sm:inline">{section.label}</span>
                      <span className="sm:hidden">{section.label.slice(0, 5)}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Section Content with smooth animations */}
              <div className="min-h-[400px]">
                {/* SKILLS SECTION */}
                {activeSection === "skills" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn">
                    {skillsData.map((category, categoryIndex) => (
                      <div
                        key={category.category}
                        className={`bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105`}
                        style={{
                          animationDelay: `${categoryIndex * 100}ms`
                        }}
                      >
                        <h3 className="text-xl font-bold mb-6 text-gray-800 border-b-2 border-orange-500 pb-2">
                          {category.category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {category.skills.map((skill, skillIndex) => (
                            <div
                              key={skill.name}
                              className="group flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-orange-50 transition-all duration-300 cursor-pointer"
                              style={{
                                animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                              }}
                            >
                              <div className="transform group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </div>
                              <p className="text-sm font-medium text-gray-700 text-center leading-tight">
                                {skill.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CERTIFICATION SECTION */}
                {activeSection === "certification" && (
                  <div className="animate-fadeIn">
                    <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg border border-orange-100">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <span className="text-2xl">🏆</span>
                        Certifications
                      </h2>
                      <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                        <div className="w-3 h-3 rounded-full bg-orange-500 mr-4 animate-pulse"></div>
                        <span className="text-gray-700 text-lg">
                          Elements of AI 2 ECTS Credit Course
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* EDUCATION SECTION */}
                {activeSection === "education" && (
                  <div className="animate-fadeIn">
                    <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg border border-orange-100">
                      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                        <span className="text-2xl">🎓</span>
                        Education
                      </h2>
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-white text-xl font-bold">SFU</span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-xl text-gray-800 mb-2">
                            Simon Fraser University
                          </h3>
                          <p className="text-lg text-gray-700 mb-2">BSc in Computer Science</p>
                          <div className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                            September 2023 - Present
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default About;