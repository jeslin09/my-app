import React from 'react'
import Navbar from '../Components/Navbar'
import Footerbase from '../Components/Footerbase'
import Heroimg2 from '../Components/Heroimg2'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
            <Navbar/>
            <Heroimg2 heading="CONTACT" text= "Let's talk Business now"/>
            <Form/>
            <Footerbase/>
    </div>
  )
}

export default Contact
