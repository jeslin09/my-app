import "./Heroimg.css";
import React from 'react'
import Homeimpig from "../Assets/Homeimg.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="Homeimg" src={Homeimpig} alt= "Homeimg"/>
        </div>
    <div className="content">
    <p> </p>
    <h1>Web Developer</h1>
    
    <Link to="/project"
    className="btn">Projects</Link>
    <Link to="/contact"
    className="btn btn-light">Contact</Link>
    </div>
    </div>
  )
}

export default Heroimg
