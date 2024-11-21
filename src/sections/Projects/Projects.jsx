import React from "react";
import styles from "./ProjectStyles.module.css";
import roboscape from "../../assets/roboscape-logo.png";
import bluesky from "../../assets/Blue-Sky-Logo.jpg";
import pokedex from "../../assets/pokedex-icon.png";
import ProjectCard from "../../common/ProjectCard";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bluesky}
          link={"https://blueskyfitnessandhealthcoaching.vercel.app/"}
          h3="BlueSky Fitness"
          p="Typescript Fitness Website"
        />
        <ProjectCard
          src={roboscape}
          link={"https://roboscape.vercel.app/"}
          h3="RoboScape"
          p="Javascript Metroidvania"
        />
        <ProjectCard
          src={pokedex}
          link={"https://msawatzky-react-pokedex.vercel.app/"}
          h3="Pokedex"
          p="Typescript Pokedex Website"
        />
      </div>
      <br />
      <br />
    </section>
  );
}

export default projects;
