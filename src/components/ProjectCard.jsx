// ProjectCard.jsx
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  technologies = [],
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Safely get first character of title, with fallback
  const getFirstChar = () => {
    if (title && typeof title === "string" && title.length > 0) {
      return title.charAt(0);
    }
    return "P"; // Default fallback if title is undefined or empty
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col w-full max-w-sm">
      {/* Image Container with increased height */}
      <div className="h-56 overflow-hidden relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-100/10"></div>

        {/* Fallback for image errors */}
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-orange-50">
            <span className="text-5xl font-bold text-orange-500">
              {getFirstChar()}
            </span>
          </div>
        ) : (
          image && (
            <img
              src={image}
              alt={title || "Project"}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
              onError={handleImageError}
            />
          )
        )}
      </div>

      {/* Content Container with increased padding */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title with Orange Accent */}
        <h2 className="text-2xl font-bold mb-4 text-orange-500">
          {title || "Project"}
        </h2>

        {/* Description with increased line height */}
        <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
          {description || "No description available"}
        </p>

        {/* Technologies Used with increased spacing */}
        {technologies && technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Link Button with increased padding */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-5 rounded-lg transition-colors duration-300 mt-auto w-full"
          >
            <FaGithub className="text-lg" />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
