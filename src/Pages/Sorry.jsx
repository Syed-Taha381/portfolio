import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/imgs/syedtaha.png";
import robot from "../Assets/imgs/robot.svg";

const Sorry = () => {
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="ProjectReview"
      >
        <h1>
          Sorry <br /> The Preview is not available yet.
        </h1>
        <img
          style={{ width: "100%", maxWidth: "400px" }}
          src={robot}
          alt="Robot"
        />
      </div>
    </Fragment>
  );
};

export default Sorry;
