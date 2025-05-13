import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Enroll = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm(
        'service_au91phq',
        'template_h781qfh', // Replace with your EmailJS template ID
        formRef.current,
        '_xHILh4NDWALL1Zy7' // Replace with your EmailJS public key
      ).then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
        }
      );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mt-3">
      <div className='row border_customise p-3'>
        <div className='col-md-6'>
          <h2>Enroll for the program</h2>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Brochure.png`}
            alt="Brochure"
            className="p-4"
          />
        </div>

        <div className='col-md-6'>
          <h2>Enroll for the course</h2>
          <p>Submit your details below to learn more about the course curriculum, benefits, fees, and more.</p>

          <form ref={formRef} onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="text-danger">{errors.message}</small>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
