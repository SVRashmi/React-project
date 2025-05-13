import React, { useState, useEffect } from "react";
import Headers from './Header';
import "./Nlp.css"; // You can create a separate CSS file for deep learning or reuse this
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarWeek, faBullseye, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import Accordion from './Accordion';
import Footer from "./Footer";

function DeepLearning() {
  const navigate = useNavigate();
  const accordionData = [
    {
      title: "Course 1: Fundamentals of Deep Learning",
      content: (
        <>
          <h5><FontAwesomeIcon icon={faCalendarWeek} style={{ color: "#FFD43B" }} /> Duration: 4–6 Weeks</h5>
          <h6><strong><FontAwesomeIcon icon={faBullseye} style={{ color: "#b51212" }} /> Goal:</strong> Learn the core concepts and tools of deep learning.</h6>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 1:</strong> Introduction to Deep Learning</p>
          <ul>
            <li>What is Deep Learning?</li>
            <li>Perceptrons and Neural Networks</li>
            <li>Activation Functions</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 2:</strong> Training Neural Networks</p>
          <ul>
            <li>Gradient Descent and Backpropagation</li>
            <li>Loss Functions</li>
            <li>Optimizers: SGD, Adam</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 3:</strong> Deep Architectures</p>
          <ul>
            <li>Feedforward and Convolutional Neural Networks</li>
            <li>Pooling Layers</li>
            <li>Dropout & Regularization</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 4:</strong> Practical Applications</p>
          <ul>
            <li>Image Classification</li>
            <li>Object Detection</li>
            <li>Handwritten Digit Recognition</li>
          </ul>
        </>
      )
    },
    {
      title: "Course 2: Advanced Deep Learning Techniques",
      content: (
        <>
          <h5><FontAwesomeIcon icon={faCalendarWeek} style={{ color: "#FFD43B" }} /> Duration: 4–6 Weeks</h5>
          <h6><strong><FontAwesomeIcon icon={faBullseye} style={{ color: "#b51212" }} /> Goal:</strong> Master cutting-edge deep learning models and techniques.</h6>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 1:</strong> Recurrent Neural Networks</p>
          <ul>
            <li>RNNs, LSTMs, GRUs</li>
            <li>Text Generation</li>
            <li>Sequence Modeling</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 2:</strong> Attention Mechanisms & Transformers</p>
          <ul>
            <li>Self-Attention</li>
            <li>Transformer Architecture</li>
            <li>BERT and GPT Overview</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 3:</strong> Generative Models</p>
          <ul>
            <li>Autoencoders</li>
            <li>Variational Autoencoders</li>
            <li>GANs</li>
          </ul>
          <p><strong><FontAwesomeIcon icon={faListCheck} style={{ color: "#2c511f" }} /> Week 4:</strong> Deep Learning in Practice</p>
          <ul>
            <li>Model Deployment</li>
            <li>Transfer Learning</li>
            <li>Custom Projects</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div>
      <Headers />
      <section className="nlp-hero deeplearning-hero">
        <div className="nlp-overlay">
          <h1 className="nlp-title">Deep Learning</h1>
          <p className="nlp-subtitle">
            Deep learning is a subset of machine learning that uses neural networks with many layers. It has powered breakthroughs in image and speech recognition, natural language processing, and more.
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
                  <p><b>Real-World Applications:</b> Image classification, object detection, voice recognition, autonomous driving.</p>
                </div>
              </div>
            </div>
            <div className="list box1">
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                <div>
                  <p><b>Deep Learning Tools:</b> TensorFlow, PyTorch, Keras for building and training models.</p>
                </div>
              </div>
            </div>
            <div className="list box1">
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                <div>
                  <p><b>Data Preparation:</b> Image augmentation, normalization, preprocessing techniques for deep learning.</p>
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

export default DeepLearning;