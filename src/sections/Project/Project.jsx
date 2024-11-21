import React from "react";
import styles from "../Project/ProjectStyles.module.css";

import ThaiTour from "../../assets/Thaipng-removebg-preview.png";
import Hipsster from "../../assets/consulting.png";
import ProjectCard from "../../common/ProjectCard";

const data = [
  {
    project: "Tourist Attraction",
    detail: "Recomend atrractive place",
    img: ThaiTour,
    github:
      "https://github.com/PassakornChamp/react-tourist-attraction-mini-project/tree/Champ",
  },
  {
    project: "Bussiness website",
    detail: "Build Landing page for business",
    img: Hipsster,
    github: "https://github.com/PassakornChamp/CSS-miniProject",
  },
];

const project = data.map((project, index) => (
  <ProjectCard
    key={index}
    src={project.img}
    title={project.project}
    description={project.detail}
    githubLink={project.github}
  />
));

export default function Project() {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle"> Projects </h1>
        <div className={styles.projectsContainer}>{project}</div>
      </section>
    </div>
  );
}
