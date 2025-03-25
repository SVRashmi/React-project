import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

import "./About.css";
import IndustriesGraph from './IndustriesGraph';

function AboutUs() {
  return (
    
    <div>
    <div className="container">
    <h3 className='my-5 text-center'>Tailored for Ambitious Professionals Like You</h3>
    <div className='d-flex gap-5'>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto" >
    <div className="card-body">
    <FontAwesomeIcon icon={faPersonChalkboard} size="2xl" className='icon_style'/>
    <h5 className="card-title  fw-bold">Leading Educator</h5>
    <p className="card-text text-dark">
    Get assistance on projects and reinforce concepts through weekly
    sessions. Learn from industry experts and enhance your skills with
    real-world applications.
    </p>
    </div>
    </div>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto " >
    <div className="card-body">
    <FontAwesomeIcon icon={faLaptopFile} size="2xl" className='icon_style background_color_1'  />
    <h5 className="card-title  fw-bold">74+ Real-world Projects</h5>
    <p className="card-text text-dark">
    Apply your knowledge through 60+ case studies and 14+ hands-on projects, simulating industry scenarios
    </p>
    </div>
    </div>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto " >
    <div className="card-body">
    
    <FontAwesomeIcon icon={faHandshakeAngle} size="2x"  className='icon_style background_color_2' />
    <h5 className="card-title  fw-bold">Career Support</h5>
    <p className="card-text text-dark">
    Receive personalised career mentorship and placement assistance with 300+ hiring partners
    </p>
    </div>
    </div>
    </div>
    </div>
    <div className='bg_custom'>
    <IndustriesGraph/>
    </div>
    </div>
  )
}

export default AboutUs