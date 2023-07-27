/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useRef } from "react";
import LogoSN from "../../assets/images/logo-sn.gif";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const About = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm a Computer Science Undergrad student at Jaypee Institute of
            Information Technology, Noida.
          </p>
          <p>
            I'm a very ambitious React Native developer. I love creating apps.
            Also experienced with Machine Learning.
          </p>
          <p>
          I have gained extensive experience in developing applications using React Native and Expo CLI, leveraging the power of cross-platform development to create robust and user-friendly mobile apps. In parallel, I have been delving into the exciting realm of Machine Learning, undertaking various projects that involve data analysis, model development, and deployment.
          </p>
          <p>Do checkout my GitHub!</p>
          <p>
            If I need to define myself in one sentence that would be a Car
            Lover, and tech-obsessed!!!
          </p>
        </div>

        <div className="logo-container" ref={bgRef}>
          <img
            className="solid-logo"
            ref={solidLogoRef}
            src={LogoSN}
            alt="JavaScript,  Developer"
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
