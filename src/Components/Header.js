import React, { useState, useEffect } from "react";
import "./Header.css";

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
                     Courses
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                      <li>
                        <Link className="dropdown-item" to="/nlp">
                          Natural Language Processing (NLP)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/machine-learning">
                         Machine Learning (ML)
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
                     <li>
                        <Link className="nav-link" to="/Blog">
                          Blog
                        </Link>
                      </li>
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
                      to="/Signup"
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

         
        </header>
      </div>
    </div>
  );
}

export default Headers;
