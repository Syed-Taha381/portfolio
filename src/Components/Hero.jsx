import React, { useEffect, useRef } from "react";
import heroImg from "../Assets/imgs/heroimg.svg";
import "../styles/Hero.css";
import { gsap } from "gsap";

const Hero = () => {
  const img = useRef(null);

  useEffect(() => {
    let timeline = gsap.timeline({ defaults: { duration: 0.5 } });
    let headerListItems = gsap.utils.toArray("header ul li");

    timeline
      .from("header .logo", { opacity: 0, y: -10 })
      .from(headerListItems, { opacity: 0, y: -10, stagger: 0.1 }, "-=5")
      .from("header .bars", { opacity: 0, y: -10 })
      .from(".hero__content h1", { opacity: 0, y: -100 })
      .from(".hero__content h3", { opacity: 0, x: -100 })
      .from(".hero__content a", { opacity: 0, y: 100 })
      .from(".hero__img", { opacity: 0, x: 100 });
  }, []);

  return (
    <div id="Home" className="hero">
      <div className="hero__content">
        <h1>
          I Design <span>Modern </span> <br /> Websites.
        </h1>
        <h3>That Makes you stand out.</h3>
        <a href="#Contact" className="hero__btn">
          Get In Touch
        </a>
      </div>
      <div className="hero__img">
        <img ref={img} src={heroImg} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
