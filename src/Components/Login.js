import { useState } from "react";
import "./Signin.css";

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in...", formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content ai-modal">
        <div className="ai-image-section">
          <img src={`${process.env.PUBLIC_URL}/Images/Login.png`} alt="AI Login" />
        </div>
        <div className="ai-form-section">
          <button onClick={onClose} className="close-btn">✕</button>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
