import "./Footerbase.css"
import React from 'react'
import { FaHome, FaMailBulk } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
const Footerbase = () => {
  return (
    <div className= "footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "1.5rem", verticalAlign: "middle" }} />
            <div>
                <p>Chandigarh University,</p>
                <p>140413</p>
            </div>
            </div>
            <div className="social">
                    <a href="https://www.linkedin.com/in/jeslingeorge2309" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} style={{ color: "#fff", marginRight: "1.5rem", verticalAlign: "middle" }} />
                    </a>
                    <a href="mailto:jeslingeorge2309@gmail.com">
                        <FaMailBulk size={25} style={{ color: "#fff", marginRight: "1.5rem", verticalAlign: "middle" }} />
                    </a>
                </div>

            </div>
            <div className="right">
            <h4> About Me</h4>
            <p>A passionate Computer Science student with a strong affinity for web development and machine learning. With a
             foundation in computer science principles and a keen interest in cutting-edge technologies, my objective is to secure
             a position within industries to begin my professional journey.</p> 
            
            </div>
        </div>
        </div>

 
  )
}

export default Footerbase
