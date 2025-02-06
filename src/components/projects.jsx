const projs = [
  {
    title: "Proshop",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Redux",
      "Node.js",
      "PayPal API",
    ],
    date: "August 2024-Present",
    description:
      "Designed and developed a full-stack eCommerce platform for residence students using the MERN stack, enabling seamless peer-to-peer product transactions and ensuring a seamless user experience.",
  },
  {
    title: "Bank Churn Prediction System",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
    date: "May 2024",
    description:
      "Developed a deep learning model using Python and TensorFlow to predict customer churn based on geo-demographical and transactional data, achieving an accuracy of 86 percent.",
  },
  {
    title: "MapWorkout",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    date: "December 2023",
    description:
      "Designed and implemented an interactive workout tracking application using JavaScript and Leaflet.js, allowing users to mark locations, log workout details, and visualize activities on a map.",
  },
  {
    title: "chefify",
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "December 2023",
    description:
      "Designed an application that allows users to search up a recipe, bookmark it, edit it and more.",
  },
  {
    title: "splitnspill",
    technologies: ["React", "CSS"],
    date: "December 2023",
    description:
      "A simple react application that allows a group of friends to split any desired bill",
  },
];

const Projects = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      {projs.map((item, index) => (
        <div key={index} className="mb-6 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-gray-600">
            <strong>Technologies:</strong> {item.technologies.join(", ")}
          </p>
          <p className="mt-2">{item.description}</p>
          <p className="text-sm text-gray-500 mt-2">Date: {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
