import "./Signin.css";
import { faUser,faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = ({ onClose }) => {

  const [selectedOption, setSelectedOption] = useState("Admin");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    remark: "",
  });
  
  const [errors, setErrors] = useState({});
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, []);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      if (isEditing) {
        // Update existing post
        const response = await axios.put(`http://localhost:3008/posts/${formData.id}`, formData);
        setPosts(posts.map((post) => (post.id === formData.id ? response.data : post)));
        alert(`Updated ${formData.name}'s details successfully.`);
      } else {
        // Add new post
        const response = await axios.post("http://localhost:3008/posts", formData);
        setPosts([...posts, response.data]);
        alert(`Thank you, ${formData.name}! Your remark has been submitted.`);
      }
      
      setFormData({ id: "", name: "", email: "", remark: "" });
      setIsEditing(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit data. Please try again.");
    }
  };
  const handleEdit = (post) => {
    setFormData(post);
    setIsEditing(true);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3008/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content ai-modal">
        <div className="ai-image-section">
          <img src={`${process.env.PUBLIC_URL}/Images/Login.png`} alt="AI Signup" />
      
        </div>
        <div className="ai-form-section">
          <button onClick={onClose} className="close-btn">✕</button>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="position-relative">
            <FontAwesomeIcon icon={faUser}  className="fontuser_icon"/>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="input_placeholder" disabled={isEditing}/>
            {errors.id && <p style={{ color: "red" }}>{errors.id}</p>}
            </div>
        
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="" disabled>User Type</option>
              <option>Admin</option>
              <option>Faculty</option>
              <option>Student</option>
            </select>

            <div className="position-relative">
            <FontAwesomeIcon icon={faEnvelope} className="fontuser_icon" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input_placeholder"/>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div className="position-relative">
            <FontAwesomeIcon icon={faKey} className="fontuser_icon"/>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="input_placeholder"/>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            
           
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
