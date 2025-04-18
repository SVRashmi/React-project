import React, { useState, useEffect } from "react";
import "./Header.css";
import Carousel from "react-bootstrap/Carousel";
import { Link, useLocation } from "react-router-dom";

function Headers() {
  const location = useLocation(); // ✅ To pass backgroundLocation state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="position-relative">
      <div className="bg-cover">
        <div className="b-cover"></div>
        <header>
          <nav
            className={`navbar navbar-expand-lg ${
              isScrolled ? "navbar-light bg-white text-black animate" : "navbar-dark text-white"
            }`}
          >
            <div className="container-fluid">
              <a
                className={`navbar-brand ${isScrolled ? "scrolled-brand" : "default-brand"}`}
                href="#"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/Images/Web_logo.png`}
                  alt="Logo"
                  className="logo"
                />
                Smart AI Academy
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Ai-Concepts
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                      <li>
                        <Link className="dropdown-item" to="/ai-models">
                          AI Models
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/machine-learning">
                          Machine Learning
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/deep-learning">
                          Deep Learning
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ContactUs">
                      ContactUs
                    </Link>
                  </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Signin"
                      state={{ backgroundLocation: location }}
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/Login"
                      state={{ backgroundLocation: location }}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Carousel fade className="shadow-2-strong">
            <Carousel.Item>
              <div
                className="d-flex justify-content-center align-items-center vh-100"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                <div className="text-white text-center">
                  <h1 className="mb-3">Learn Machine Learning with Smart Academy</h1>
                  <h5 className="mb-4">Best & free guide to Artificial Intelligence</h5>
                  <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                    target="_blank"
                    rel="nofollow"
                  >
                    Start tutorial
                  </a>
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
                  <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                    target="_blank"
                    rel="nofollow"
                  >
                    Start tutorial
                  </a>
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
          </Carousel>
        </header>
      </div>
    </div>
  );
}

export default Headers;
