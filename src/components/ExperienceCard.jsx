import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  description = [],
  companyLink,
  skills = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCompanyInitials = () => {
    if (company && typeof company === "string" && company.length > 0) {
      return company.split(' ').map(word => word.charAt(0)).join('').slice(0, 2);
    }
    return "EX";
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col w-full max-w-sm">
      {/* Header with Company Logo/Initials - Reduced height */}
      <div className="h-16 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-lg font-bold text-black-600">
            {getCompanyInitials()}
          </span>
        </div>
      </div>

      {/* Content Container - Reduced padding */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Job Title - Smaller text */}
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {title || "Position"}
        </h2>

        {/* Company Name with Link - Smaller text */}
        <div className="flex items-center mb-3">
          <FaBriefcase className="text-orange-500 mr-2 text-sm" />
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200 flex items-center gap-1"
            >
              {company || "Company"}
              <FaExternalLinkAlt className="text-xs" />
            </a>
          ) : (
            <span className="text-lg font-semibold text-orange-600">
              {company || "Company"}
            </span>
          )}
        </div>

        {/* Location and Duration - Smaller text and spacing */}
        <div className="flex flex-col gap-1 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-orange-500 mr-2 text-xs" />
            <span>{location || "Location"}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-orange-500 mr-2 text-xs" />
            <span>{duration || "Duration"}</span>
          </div>
        </div>

        {/* Description - More compact */}
        <div className="mb-4 flex-grow">
          {description && description.length > 0 && (
            <ul className="space-y-2">
              {description.slice(0, isExpanded ? description.length : 1).map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
          
          {description && description.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 text-sm"
            >
              {isExpanded ? "Show Less" : `Show ${description.length - 1} More`}
            </button>
          )}
        </div>

        {/* Skills Used - More compact */}
        {skills && skills.length > 0 && (
          <div className="mt-auto">
            <h4 className="text-xs font-semibold text-gray-600 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const experienceData = [
  {
    title: "Software Developer Intern",
    company: "Craft Silicon",
    location: "Nairobi, Kenya",
    duration: "June - August 2025",
    companyLink: "https://craftsilicon.com",
    description: [
      "Developed REST APIs using Javascript and SQL for financial institutions, resulting in streamlined data exchange processes for banking and insurance clients",
      "Implemented comprehensive testing strategies for payment APIs using Jest, reducing production errors by 40% and ensuring reliability for financial transactions across banking systems",
      "Utilized Angular and Spring Boot to make a document viewing portal which will be used by over 50 employees"
    ],
    skills: ["JavaScript", "SQL", "Jest", "Angular", "Spring Boot", "REST APIs"]
  },
  {
    title: "Software Developer",
    company: "SFU StormForge",
    location: "Burnaby, British Columbia",
    duration: "January - April 2025",
    companyLink: "https://www.sfu.ca/venture-labs/stormforge.html",
    description: [
      "Built an AI-powered job application tool as part of the competitive SFU StormForge incubator program, receiving guidance from industry mentors and participating in workshops and networking events",
      "Increased job-seeking efficiency by 40 percent by integrating the JSearch API to fetch over 10,000 job postings and using the OpenAI embeddings with NER to analyze resumes for role-fit with 85 percent accuracy",
      "Reduced application time by 30 percent through a responsive modern UI built with React and ShadCN UI"
    ],
    skills: ["React", "AI/ML", "OpenAI", "NER", "ShadCN UI", "JSearch API"]
  },
  {
    title: "Software Developer",
    company: "CJSF 90.1FM",
    location: "Burnaby, British Columbia", 
    duration: "September - December 2024",
    companyLink: "https://www.cjsf.ca",
    description: [
      "Developed a responsive homepage and scheduling components in Next.js, collaborating with designers using Figma for UI/UX alignment to enhance functionality and visual appeal for a platform serving 1,000+ active users",
      "Integrated Strapi CMS to manage user accounts and scheduling data through RESTful APIs. Reduced manual data handling by 70% and supported dynamic rendering of scheduled radio segments",
      "Designed an interactive Donation page using CSS Grid and React components with reusable logic to help streamline user navigation to donation and volunteer pages with the goal of increasing donations by 20%"
    ],
    skills: ["Next.js", "React", "Strapi CMS", "Figma", "CSS Grid", "RESTful APIs"]
  }
];

const Experience = () => {
  return (
    <div className="px-0 sm:px-4 py-16 max-w-7xl mx-auto bg-white">
      {/* Left-aligned header */}
      <div className="mb-16 pl-4">
        <h1 className="text-5xl font-bold mb-2 text-black">EXPERIENCE</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  {experienceData.map((experience, index) => (
    <ExperienceCard
      key={`${experience.company}-${index}`}
      title={experience.title}
      company={experience.company}
      location={experience.location}
      duration={experience.duration}
      description={experience.description}
      companyLink={experience.companyLink}
      skills={experience.skills}
    />
  ))}
</div>
    </div>
  );
};

export default Experience;