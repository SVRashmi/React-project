import React from 'react'
import './Form.css'

function ContactUs() {
  return (
    <div className="container m-5">
    <h1 className="contact-header">Contact Us About Our Courses</h1>
    <p className="contact-description">We’d love to show you how...</p>
      <img src={`${process.env.PUBLIC_URL}/Images/Designer.jpeg`}  alt="Brochure"  className="cus_design" />
      <div className='row'>
        <div className='col-md-6'>
        <p>The quickest way to get in touch with us is by using the contact information below. </p>
       
        </div>

      </div>
     
    <div className="contact-options my-5">
    <div className="contact-box">
    <h3>Call us directly</h3>
    <p>+44 20 3514 0663</p>
    </div>
    <div className="contact-box">
    <h3>Chat with Sales</h3>
    <button className="contact-button">Chat with Sales</button>
    </div>
    <div className="contact-box">
    <h3>Get a course demo</h3>
    <button className="contact-button">Get a Demo</button>
    </div>
    </div>
    
   
    </div>
    
  )
}

export default ContactUs