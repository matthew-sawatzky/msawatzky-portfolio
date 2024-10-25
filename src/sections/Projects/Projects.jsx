import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from "../../common/ProjectCard";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://blueskyfitnessandhealthcoaching.vercel.app/"}
          h3="BlueSky Fitness & Health Coaching"
          p="Typescript Fitness Website"
        />
        <ProjectCard
          src={freshBurger}
          link={"https://roboscape.vercel.app/"}
          h3="RoboScape"
          p="Javascript Metroidevania"
        />
        <ProjectCard
          src={hipsster}
          link={"https://github.com/matthew-sawatzky"}
          h3="Pokedex"
          p="Typescript Pokedex Website"
        />
      </div>
    </section>
  );
}

export default projects;
