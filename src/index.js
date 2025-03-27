import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import "@fortawesome/react-fontawesome";
import AboutUs from "./Components/AboutUs";
import AiConcepts from "./Components/AiConcepts";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
import reportWebVitals from './reportWebVitals';
import AIModels from "./Components/AIModels";
import MachineLearning from "./Components/MachineLearning";
import DeepLearning from "./Components/DeepLearning";
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AiConcepts" element={<AiConcepts />} />
        <Route path="/ai-models" element={<AIModels />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/deep-learning" element={<DeepLearning />} />
        <Route path="/ContactUs" element={< ContactUs />} />
        <Route path="/Blog" element={< Blog/>} />
        </Routes>
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
