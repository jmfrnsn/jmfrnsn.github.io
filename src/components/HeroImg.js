import "./HeroImgStyles.css";
import GlassCube from "../assets/glasscubeimg.png";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
                src={GlassCube} alt="GlassCube"/>
        </div>

        <div className="content">
            <p>Hi, I'm Jade</p>
            <h1>DIGITAL DESIGNER.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg