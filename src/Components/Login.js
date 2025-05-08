import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signin.css";

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "Faculty"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get("http://localhost:3001/posts");
      const users = response.data;

      const user = users.find(
        
        (u) =>
          u.email.trim().toLowerCase() === formData.email.trim().toLowerCase() &&
          u.password === formData.password &&
          u.userType === formData.userType
      );
      console.log("All Users:", users);
console.log("Form Data:", formData);


      if (user) {
        if (user.userType === "Admin") {
          navigate("/AdminDashboard", { state: user });
        }
        else
        navigate("/login-success", { state: user });
      } else {
        setError("Invalid email, password, or user type.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again later.");
    }
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

            <select name="userType" value={formData.userType} onChange={handleChange} className="form-select mt-2">
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>

            {error && <p className="text-danger mt-2">{error}</p>}

            <button type="submit" className="btn btn-primary mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
