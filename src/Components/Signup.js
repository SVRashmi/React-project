import "./Signin.css";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Signup = ({ onClose })=> {
  const navigate = useNavigate();
  const [existingUsers, setExistingUsers] = useState([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "Faculty", // default
  });
  
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    axios.get("http://localhost:3002/posts")
    .then(res => setExistingUsers(res.data))
    .catch(err => console.error("Fetch users failed:", err));
  }, []);
  
  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    } else if (existingUsers.some(user => user.email === formData.email)) {
      newErrors.email = "Email already exists";
    }
    
    if (!formData.password.trim()) newErrors.password = "Password is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const location = useLocation(); // 👈 this is the correct way
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      await axios.post("http://localhost:3002/posts", formData);
      alert(`Signup successful! Please login.`);
      setFormData({ name: "", email: "", password: "", userType: "Faculty" });
      navigate("/Login", { state: { backgroundLocation: location } });
      
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };
  
  return (
    <div className="modal-overlay">
    <div className="modal-content ai-modal">
    <div className="ai-image-section">
    <img src={`${process.env.PUBLIC_URL}/Images/Login.jpg`} alt="AI Signup" />
    </div>
    <div className="ai-form-section">
    <button onClick={onClose} className="close-btn">✕</button>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
    <div className="position-relative">
    <FontAwesomeIcon icon={faUser} className="fontuser_icon" />
    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
    
    </div>
    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
    <div className="position-relative">
    <FontAwesomeIcon icon={faEnvelope} className="fontuser_icon" />
    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
    
    </div>
    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
    
    <div className="position-relative">
    <FontAwesomeIcon icon={faKey} className="fontuser_icon" />
    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
    
    </div>
    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
    <select name="userType" value={formData.userType} onChange={handleChange} className="form-select mt-2">
    <option value="Faculty">Faculty</option>
    <option value="Student">Student</option>
    
    
    </select>
    
    <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;
