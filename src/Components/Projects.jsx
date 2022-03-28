import React, { useEffect } from "react";
import projects from "../Assets/data";
import "../styles/Projects.css";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="Projects" className="Projects">
      <h1>
        My Recent <span>Projects</span>{" "}
      </h1>
      <div className="Projects__Gallery">
        {projects.map((project) => (
          <Project
            left={project.left == true ? true : false}
            right={project.left == true ? false : true}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
