
import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link} from "react-router-dom";
function Carouel() {
  return (
    <div> <Carousel fade className="shadow-2-strong">
    <Carousel.Item>
    <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{ background: "rgba(0,0,0,0.6)" }}
    >
    <div className="text-white text-center">
    <h1 className="mb-3">Learn Machine Learning with Smart Academy</h1>
    <h5 className="mb-4">Best & free guide to Artificial Intelligence</h5>
    <button
    className="btn btn-outline-light btn-lg m-2"
    onClick={() => window.open(`${process.env.PUBLIC_URL}/Videos/ML.mp4`, "_blank")}
    >
    Start tutorial
    </button>
    
    <Link className="btn btn-outline-light btn-lg m-2" to="/Brochure">
    Download brochure
    </Link>
    </div>
    </div>
    </Carousel.Item>
    
    <Carousel.Item>
    <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{ background: "rgba(0,0,0,0.3)" }}
    >
    <div className="text-white text-center">
    <h1>Master Data Analytics with Smart Academy</h1>
    <h5>Your Free Guide to Smarter Decisions</h5>
    
      <button
    className="btn btn-outline-light btn-lg m-2"
    onClick={() => window.open(`${process.env.PUBLIC_URL}/Videos/DataAnalytics.mp4`, "_blank")}
    >
    Start tutorial
    </button>
    </div>
    </div>
    </Carousel.Item>
    
    <Carousel.Item>
    <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      background:
      "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
    }}
    >
    <div className="text-white text-center">
    <h1>Unlock AI Potential with Deep Learning</h1>
    <a
    className="btn btn-outline-light btn-lg m-2"
    href="https://mdbootstrap.com/docs/standard/content-styles/masks/"
    target="_blank"
    >
    Learn about Deep Learning
    </a>
    </div>
    </div>
    </Carousel.Item>
    </Carousel></div>
  )
}

export default Carouel