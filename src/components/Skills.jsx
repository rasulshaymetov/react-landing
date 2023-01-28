import React from "react";
const Skills = () => {
  const skills = [
    { title: "Adobe Photoshop", rate: "4", imageUrl: "./image/logo0.svg" },
    { title: "Adobe Illustrator", rate: "5", imageUrl: "./image/logo1.svg" },
    { title: "Adobe After Effects", rate: "5", imageUrl: "./image/logo2.svg" },
    { title: "Figma", rate: "4", imageUrl: "./image/logo3.svg" },
  ];
  return (
    <div className="skills">
      <h1 className="skills__heading">Skills</h1>
      <p className="skills__subheading">I work in such programs as</p>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="skills__list-item" key={skill.title}>
            <img
              rate={skill.rate}
              className="skills__logo"
              src={skill.imageUrl}
              alt=""
            />
            {skill.title}
            <div className="skills__rate">
              <img
                rate={skill.rate}
                src={skill.rate > 0 ? like : star}
                alt=""
              />
              <img
                rate={skill.rate}
                src={skill.rate > 1 ? like : star}
                alt=""
              />
              <img
                rate={skill.rate}
                src={skill.rate > 2 ? like : star}
                alt=""
              />
              <img
                rate={skill.rate}
                src={skill.rate > 3 ? like : star}
                alt=""
              />
              <img
                rate={skill.rate}
                src={skill.rate > 4 ? like : star}
                alt=""
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
