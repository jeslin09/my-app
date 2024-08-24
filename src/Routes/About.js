import React from 'react'
import Footerbase from '../Components/Footerbase'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg2 heading= "About Me" text="I am a BE-CSE student with a strong passion for pursuing a career in machine learning and web development. My specializations include C++, Python, and content writing, enabling me to blend technical expertise with effective communication skills."/>
     <AboutContent/>
     <Footerbase/>

    </div>
  )
}

export default About
