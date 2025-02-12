import Cardpro from "./Cardpro";

import proshop from "../assets/images/proshop.png";
import mapty from "../assets/images/mapty.png";
import chefify from "../assets/images/chefify.png";
import split from "../assets/images/split.png";

const projs = [
  {
    title: "Proshop",
    description:
      "Designed and developed a full-stack eCommerce platform for residence students using the MERN stack, enabling seamless peer-to-peer product transactions and ensuring a seamless user experience.",
    image: proshop,
    githubLink: "https://github.com/Manan565/Proshop2", // GitHub Repo Link
  },
  {
    title: "MapWorkout",
    description:
      "Designed and implemented an interactive workout tracking application using JavaScript and Leaflet.js, allowing users to mark locations, log workout details, and visualize activities on a map.",
    image: mapty,
    githubLink: "https://github.com/Manan565/WorkoutMap",
  },
  {
    title: "Chefify",
    description:
      "Designed an application that allows users to search up a recipe, bookmark it, edit it and more.",
    image: chefify,
    githubLink: "https://github.com/Manan565/chefify",
  },
  {
    title: "SplitnSpill",
    description:
      "A simple React application that allows a group of friends to split any desired bill.",
    image: split,
    githubLink: "https://github.com/Manan565/splitnspill",
  },
];

const Projects = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projs.map((item) => (
          <Cardpro
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            githubLink={item.githubLink} // Pass GitHub Link
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
