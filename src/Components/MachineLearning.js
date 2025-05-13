import React from "react";
import Headers from './Header';
import "./Nlp.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarWeek, faBullseye, faListCheck } from "@fortawesome/free-solid-svg-icons";
import Accordion from './Accordion';
import Footer from "./Footer";

function MachineLearning() {
  const navigate = useNavigate();
  const accordionData = [
    {
      title: "Course 1: Introduction to Machine Learning",
      content: (
        <>
          <h5><FontAwesomeIcon icon={faCalendarWeek} style={{ color: "#FFD43B" }} /> Duration: 4–6 Weeks</h5>
          <h6><strong><FontAwesomeIcon icon={faBullseye} style={{ color: "#b51212" }} /> Goal:</strong> Understand the basics of ML algorithms and applications.</h6>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 1:</strong> Overview of Machine Learning</p>
          <ul>
            <li>Supervised vs Unsupervised Learning</li>
            <li>Common ML Applications</li>
            <li>Setting up Python & Jupyter</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 2:</strong> Regression</p>
          <ul>
            <li>Linear Regression</li>
            <li>Gradient Descent</li>
            <li>Evaluating Performance (MSE, R2)</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 3:</strong> Classification</p>
          <ul>
            <li>Logistic Regression</li>
            <li>K-Nearest Neighbors (KNN)</li>
            <li>Naive Bayes Classifier</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 4:</strong> Model Evaluation</p>
          <ul>
            <li>Confusion Matrix</li>
            <li>Precision, Recall, F1 Score</li>
            <li>Cross Validation</li>
          </ul>
        </>
      )
    },
    {
      title: "Course 2: Advanced Machine Learning",
      content: (
        <>
          <h5><FontAwesomeIcon icon={faCalendarWeek} style={{ color: "#FFD43B" }} /> Duration: 4–6 Weeks</h5>
          <h6><strong><FontAwesomeIcon icon={faBullseye} style={{ color: "#b51212" }} /> Goal:</strong> Dive deeper into advanced models and techniques.</h6>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 1:</strong> Decision Trees & Random Forests</p>
          <ul>
            <li>How Trees Work</li>
            <li>Overfitting and Pruning</li>
            <li>Ensemble Methods</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 2:</strong> Support Vector Machines (SVM)</p>
          <ul>
            <li>Margins & Kernels</li>
            <li>SVM for classification</li>
            <li>Hyperparameter Tuning</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 3:</strong> Clustering & Unsupervised Learning</p>
          <ul>
            <li>K-Means</li>
            <li>Hierarchical Clustering</li>
            <li>Dimensionality Reduction (PCA)</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 4:</strong> Real-World Applications</p>
          <ul>
            <li>Recommendation Systems</li>
            <li>Fraud Detection</li>
            <li>Project: Predictive Analytics</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div>
      <Headers />
      <section className="nlp-hero ML-hero">
        <div className="nlp-overlay">
          <h1 className="nlp-title">Machine Learning</h1>
          <p className="nlp-subtitle">
            Machine Learning enables systems to learn from data, identify patterns, and make decisions with minimal human intervention.
          </p>
        </div>
      </section>

      <section className="mt-n4 custom-negative-mt-lg position-relative z-index-1">
        <div className="container">
          <div className="d-flex gap-5">
            <div className="list box1">
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                <div>
                  <p><b>Applications:</b> Recommendation engines, fraud detection, stock market prediction, medical diagnosis.</p>
                </div>
              </div>
            </div>
            <div className="list box1">
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                <div>
                  <p><b>ML Tools:</b> scikit-learn, pandas, NumPy, Jupyter Notebook.</p>
                </div>
              </div>
            </div>
            <div className="list box1">
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                <div>
                  <p><b>Data Prep:</b> Feature engineering, data cleaning, encoding techniques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center mt-5">Course Syllabus</h2>
        <Accordion data={accordionData} />
      </section>

      <div className="container">
        <button className="btn btn-outline-light btn-lg mb-5 bg-color" onClick={() => navigate('/Enroll')} >Enroll Now</button>
      </div>
      <Footer/>
    </div>
  );
}

export default MachineLearning;
