import Cardpro from "./Cardpro";
const projs = [
  {
    title: "Proshop",
    description:
      "Designed and developed a full-stack eCommerce platform for residence students using the MERN stack, enabling seamless peer-to-peer product transactions and ensuring a seamless user experience.",
    image: "/assets/images/proshop.png",
  },
  {
    title: "Bank Churn Prediction System",
    description:
      "Developed a deep learning model using Python and TensorFlow to predict customer churn based on geo-demographical and transactional data, achieving an accuracy of 86 percent.",
    image: "/assets/images/churn.png",
  },
  {
    title: "MapWorkout",

    description:
      "Designed and implemented an interactive workout tracking application using JavaScript and Leaflet.js, allowing users to mark locations, log workout details, and visualize activities on a map.",
    image: "/assets/images/mapty.png",
  },

  {
    title: "chefify",

    description:
      "Designed an application that allows users to search up a recipe, bookmark it, edit it and more.",
    image: "/assets/images/proshop.png",
  },
  {
    title: "splitnspill",

    description:
      "A simple react application that allows a group of friends to split any desired bill",
    image: "/assets/images/proshop.png",
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
