// Projects.jsx
import ProjectCard from "./ProjectCard.jsx";

// Import images
import proshop from "../assets/images/proshop.png";
import mapty from "../assets/images/mapty.png";
import chefify from "../assets/images/chefify.png";
import split from "../assets/images/split.png";
import res from "../assets/images/Screenshot_2025-03-28 021625.png";
import ami from "../assets/images/ami.png";

const projectsData = [
  {
    title: "ResuMate",
    description:
      "A platform to find suggested job postings curated to the user and help with applications.",
    image: res,
    githubLink: "https://github.com/CMPT-276-SPRING-2025/final-project-lakes",
    technologies: ["React", "Next.js", "AI", "Tailwind CSS"],
  },
  {
    title: "Proshop",
    description:
      "Designed and developed a full-stack eCommerce platform for residence students using the MERN stack, enabling seamless peer-to-peer product transactions and ensuring a seamless user experience.",
    image: proshop,
    githubLink: "https://github.com/Manan565/Proshop2",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "CloudSync",
    description:
      "Allows clients to store any files that they can think of, a common feature that most applications have. Using Spring Boot for the backend and Amazon S3 to store files (images).",
    image: ami,
    githubLink: "https://github.com/Manan565/CloudSync",
    technologies: ["Java", "SpringBoot", "React", "AWS s3"],
  },
  {
    title: "MapWorkout",
    description:
      "Designed and implemented an interactive workout tracking application using JavaScript and Leaflet.js, allowing users to mark locations, log workout details, and visualize activities on a map.",
    image: mapty,
    githubLink: "https://github.com/Manan565/WorkoutMap",
    technologies: ["JavaScript", "Leaflet.js", "HTML5", "CSS3"],
  },
  {
    title: "Chefify",
    description:
      "Designed an application that allows users to search up a recipe, bookmark it, edit it and more.",
    image: chefify,
    githubLink: "https://github.com/Manan565/chefify",
    technologies: ["React", "JavaScript", "CSS3"],
  },
  {
    title: "SplitnSpill",
    description:
      "A simple React application that allows a group of friends to split any desired bill.",
    image: split,
    githubLink: "https://github.com/Manan565/splitnspill",
    technologies: ["React", "JavaScript", "CSS3"],
  },
];

const Projects = () => {
  return (
    <div className="px-0 sm:px-4 py-16 max-w-7xl mx-auto">
      {/* Left-aligned header with more bottom margin */}
      <div className="mb-16 pl-4">
        <h1 className="text-5xl font-bold mb-2 text-black">PROJECTS</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
      </div>

      {/* Project Cards Grid with increased gap and centering */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {projectsData.map((project) => (
          <div key={project.title} className="flex justify-center">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
