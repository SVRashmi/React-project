import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import "@fortawesome/react-fontawesome";
import AboutUs from "./Components/AboutUs";
import AiConcepts from "./Components/AiConcepts";
import Blog from "./Components/Blog";
import ContactUsForm from "./Components/ContactUs";
import reportWebVitals from './reportWebVitals';
import Nlp from "./Components/Nlp";
import MachineLearning from "./Components/MachineLearning";
import DeepLearning from "./Components/DeepLearning";
import Brochure from "./Components/Brochure";
import ModalRoutesWrapper from './Components/ModalRoutesWrapper';
import AdminDashboard from "./Components/AdminDashboard";
import Enroll from "./Components/Enroll";
import Signup from "./Components/Signup";
import Login from './Components/Login';
import FacultyDashboard from './Components/FacultyDashboard';
import StudentDashboard from './Components/StudentDashboard';
const RootRoutes = () => {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AiConcepts" element={<AiConcepts />} />
        <Route path="/nlp" element={<Nlp />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/deep-learning" element={<DeepLearning />} />
        <Route path="/ContactUs" element={<ContactUsForm />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Brochure" element={<Brochure />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Enroll" element={<Enroll />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
     

      
      </Routes>

 
      <ModalRoutesWrapper />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RootRoutes />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
