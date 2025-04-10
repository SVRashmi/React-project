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
import AIModels from "./Components/AIModels";
import MachineLearning from "./Components/MachineLearning";
import DeepLearning from "./Components/DeepLearning";
import Brochure from "./Components/Brochure";
import ModalRoutesWrapper from './Components/ModalRoutesWrapper';

const RootRoutes = () => {
  const location = useLocation();
  const backgroundLocation = location.state && location.state.background;

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AiConcepts" element={<AiConcepts />} />
        <Route path="/ai-models" element={<AIModels />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/deep-learning" element={<DeepLearning />} />
        <Route path="/ContactUs" element={<ContactUsForm />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Brochure" element={<Brochure />} />
      </Routes>

      {/* Only show modal routes if triggered */}
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
