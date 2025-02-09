import { useState } from "react";

const experiences = [
  {
    name: "Cjsf 90.1",
    role: "software developer",
    description:
      "Deployed and maintained a fully functional and responsive website using JavaScript libraries such as React and other scripting languages such as HTML5 and CSS3",
  },
];

export const About = () => {
  const [skills, updateskills] = useState(true);
  const [certification, updatecertification] = useState(false);
  const [education, updateeducation] = useState(false);

  const handleSelection = (section) => {
    updateSkills(section === "skills");
    updateCertification(section === "certification");
    updateEducation(section === "education");
  };

  return (
    <div className=" mt-10 ml-4 pt-10">
      <h1 className=" text-5xl font-bold mb-4">ABOUT ME</h1>
      <div className="contact">
        <p className="text-lg leading-relaxed">
          I am a driven and aspiring software developer with a passion for
          transforming innovative ideas into user-friendly software solutions.
          Currently serving as a Front End Web Developer at CJSF 90.1 FM, I
          excel at working collaboratively within a team. I thrive on tackling
          complex challenges, expanding my skill set, and fostering meaningful
          connections.
        </p>
        <div>
          <button onClick={() => handleSelection("skills")}>skills</button>
          {skills ? <p>yea skills on</p> : ""}
          <button onClick={() => handleSelection("certification")}>
            certification
          </button>
          {certification ? <p>yea certification on</p> : ""}
          <button onClick={() => handleSelection("education")}>
            education
          </button>
          {education ? <p>poooooooooo</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default About;
