import React, { useState } from "react";

function Brochure() {
     // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setErrors(validationErrors);
    }
  };
    return (
    
        <div className="container mt-3">
        <div className='row border_customise  p-3'>
        <div className='col-md-6'>
           <h2>PG Program in Artifical Intelligence and Machine Learning</h2>
           <img src={`${process.env.PUBLIC_URL}/Images/Brochure.png`}  alt="Brochure"  className="p-4" />
        </div>
        <div className='col-md-6'>
        <h2>Recieve Your Brochure Copy</h2>
        <p>Submit your details below to learn more about the course curriculum, benifts, fee and more</p>
        
        <form onSubmit={handleSubmit}>
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
     
    )
}

export default Brochure