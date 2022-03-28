import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Project = ({ project, left, right }) => {
  return (
    <>
      <div className="Project ">
        <Fade left={left} right={right} delay={right && 500} duration={1000}>
          <div className="Project__Img">
            <img src={project.lanscape[0].img} alt="" />
          </div>
          <div className="Project__Content">
            <h4>{project.title[0] + " " + project.title[1]}</h4>
            <div className="Project__Btns">
              <Link
                className="previewBtn"
                to={project.preview ? project.preview : "/Sorry"}
              >
                Preview
              </Link>
              <Link
                to={`/project-review/${project.title[0] + project.title[1]}`}
              >
                Open
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Project;
