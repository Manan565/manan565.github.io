import Cardpro from "./Cardpro";

import proshop from "../assets/images/proshop.png";
import churn from "../assets/images/churn.png";
import mapty from "../assets/images/mapty.png";
import chefify from "../assets/images/chefify.png";
import split from "../assets/images/split.png";
const projs = [
  {
    title: "Proshop",
    description:
      "Designed and developed a full-stack eCommerce platform for residence students using the MERN stack, enabling seamless peer-to-peer product transactions and ensuring a seamless user experience.",
    image: proshop,
  },
  {
    title: "Bank Churn Prediction System",
    description:
      "Developed a deep learning model using Python and TensorFlow to predict customer churn based on geo-demographical and transactional data, achieving an accuracy of 86 percent.",
    image: churn,
  },
  {
    title: "MapWorkout",

    description:
      "Designed and implemented an interactive workout tracking application using JavaScript and Leaflet.js, allowing users to mark locations, log workout details, and visualize activities on a map.",
    image: mapty,
  },

  {
    title: "chefify",

    description:
      "Designed an application that allows users to search up a recipe, bookmark it, edit it and more.",
    image: chefify,
  },
  {
    title: "splitnspill",

    description:
      "A simple react application that allows a group of friends to split any desired bill",
    image: split,
  },
];

const Projects = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {projs.map((item) => (
          <Cardpro
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
