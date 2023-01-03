import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/intro-bg2.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HELLO THERE, I'M A FREELANCER.</p>
            <h1>IT Professional.</h1>
            <div>
                <Link to="/project" className="btn">My Works</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
          </div>
  )
}

export default HeroImg