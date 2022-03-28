import React, { Fragment } from "react";
import "../styles/ProjectReview.css";
import logo from "../Assets/imgs/syedtaha.png";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import projects from "../Assets/data/index";

const ProjectReview = () => {
  const { id } = useParams();
  console.log(id);
  const filteredProject = projects.filter(
    (project) => project.title[0] + project.title[1] == id
  );
  const project = filteredProject[0];
  return (
    <Fragment>
      <header as="nav" className="projectHeader ">
        <Link to="/">
          <div className="back">
            <span className="backArrow"></span>
          </div>
        </Link>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
      <div className="ProjectReview">
        <h1>
          {project.title[0]} <span>{project.title[1]} </span>{" "}
        </h1>
        {project.lanscape.map((item) => (
          <div className="PR">
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
        <h1 style={{ marginTop: "5rem", width: "100%" }}>
          <span>Responsivness</span>
        </h1>
        <div className="Responsivness">
          {project.mobile.map((item) => (
            <div className="PR PRMOB">
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProjectReview;
