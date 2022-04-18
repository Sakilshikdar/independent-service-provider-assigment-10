import React from "react";
import logo from "../../images/picture2.webp";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="first-section">
        <div className="part1">
          <h1 className="header-style">
            My Mission <br /><span className="Developer"> In 2022</span>
          </h1>
          <p id="paragraph">
            My mission in 2022 is to be a developer. I want to do something by
            developing Website.I can do something. For got it I try my best.I know that when I try my best I got it..
          </p>
          <button className="link-button" href="#">
            More
          </button>
        </div>
        <div>
          <img className="mr-0" src={logo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
