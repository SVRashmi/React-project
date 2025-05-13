import React, { useState, useEffect } from "react";
import Headers from './Header';
import "./Nlp.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom';

import Accordion from './Accordion';
function Nlp() {
  const navigate = useNavigate();
  const accordionData = [
    { title: "Course 1: Foundations of Natural Language Processing", content: (
      <>
      <h5><FontAwesomeIcon icon={faCalendarWeek} style={{color: "#FFD43B",}} /> Duration: 4–6  Weeks</h5>
      <h6><strong><FontAwesomeIcon icon={faBullseye} style={{color: "#b51212",}} /> Goal:</strong> Understand the core principles and tools used in NLP.</h6>  
      <p><strong> <FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} /> Week 1:</strong> Introduction to NLP</p>
      <ul>
      <li>What is NLP?</li>
      <li>Applications of NLP</li>
      <li>Popular Libraries: NLTK, spaCy</li>
      </ul>
      <p><strong> <FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 2:</strong> Sequence Models</p>
      <ul>
      <li>Language modeling</li>
      <li>N-grams</li>
      <li>Hidden Markov Models (HMMs)</li>
      </ul>
      <p><strong> <FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 3:</strong> Text Representation</p>
      <ul>
      <li>Bag of Words</li>
      <li>TF-IDF</li>
      <li>Word Embeddings (Word2Vec, GloVe)</li>
      </ul>
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 4:</strong> Basic NLP Tasks</p>
      <ul>
      <li>Part-of-Speech (POS) tagging</li>
      <li>Named Entity Recognition (NER)</li>
      <li>Chunking and parsing</li>
      </ul>
      </>
    ) },
    { title: "Course 2: Advanced NLP with Machine Learning & Deep Learning", content: (<>
      <h5> <FontAwesomeIcon icon={faCalendarWeek} style={{color: "#FFD43B",}} /> Duration: 4–6 Weeks</h5>
      <h6><strong><FontAwesomeIcon icon={faBullseye} style={{color: "#b51212",}} />  Goal:</strong> Dive deeper into model-based NLP, from traditional ML to transformers.</h6>    
      
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 1:</strong> Text Classification with Machine Learning</p>
      <ul>
      <li>Feature extraction</li>
      <li>Naive Bayes, SVM for text</li>
      <li>Model evaluation (Precision, Recall, F1)</li>
      </ul>
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 2:</strong> Sequence Models</p>
      <ul>
      <li>Language modeling</li>
      <li>N-grams</li>
      <li>Hidden Markov Models (HMMs)</li>
      </ul>
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 3:</strong> Deep Learning for NLP</p>
      <ul>
      <li>RNNs, LSTMs, GRUs</li>
      <li>Text generation</li>   
      <li>Using TensorFlow/Keras for NLP</li>
      </ul>
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 4:</strong> Transformers & BERT</p>
      <ul>
      <li>Introduction to Transformers</li>
      <li>Self-attention mechanism</li>
      <li>Using BERT with HuggingFace</li>
      </ul>
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 5:</strong> NLP in Practice</p>
      <ul>
      <li>Chatbots with Rasa/Dialogflow</li>
      <li>Question answering systems</li>
      <li>Speech-to-text & translation overview</li>
      </ul>
      <p><strong><FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week 6:</strong> Optional Project <FontAwesomeIcon icon={faListCheck} style={{color: "#2c511f",}} />  Week</p>
      <ul>
      <li>Build your own NLP application</li>
      <li>Capstone presentation or blog post</li>
      </ul>
      </>) },
    ];
    
    return (
      <div>
      <Headers />
      <section className="nlp-hero">
      <div className="nlp-overlay">
      <h1 className="nlp-title">Natural Language Processing (NLP)</h1>
      <p className="nlp-subtitle">
      
      Natural Language Processing (NLP) is a field of artificial intelligence (AI) that enables computers to comprehend, generate, and manipulate human language. It allows machines to interpret, analyze, and respond to text or speech in a way that is both meaningful and contextually relevant.
      
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
      <p><b>Real-World Applications of NLP: </b> NLP is integrated into various applications that we interact with daily: Chatbots, Voice Assistants, Language Translation, Sentiment Analysis, Spam Detection</p>
      </div>
      </div>
      </div>
      <div className="list box1">
      <div className="d-flex gap-3">
      <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
      <div>
      <p><b>Language Modeling & Translation: </b> NLP builds statistical or neural models that capture grammar, structure, and semantics: Language modeling, Machine translation, Cross-lingual search</p>
      </div>
      </div>
      </div>
      <div className="list box1">
      <div className="d-flex gap-3">
      <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
      <div>
      <p><b>Data Cleaning & Preprocessing: </b> In data science pipelines, NLP assists in: Tokenization,Lemmatization or stemming, Stop-word removal, Vectorization</p>
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
      <button class="btn btn-outline-light btn-lg mb-5 bg-color" onClick={() => navigate('/Enroll')} >Enroll Now</button>
      </div>
      
      
      </div>
    );
  }
  
  export default Nlp;
  