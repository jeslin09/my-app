import React from 'react'
import Navbar from '../Components/Navbar'
import Footerbase from '../Components/Footerbase'
import Heroimg2 from '../Components/Heroimg2'
import Work from '../Components/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Recent Works"/>
      <Work/>
      <Footerbase/>

    </div>
)}
export default Project