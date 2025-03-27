import React from "react";
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          
          {/* Social Media Section */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Follow us!</h5>
          
            <div className="d-flex gap-2">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaTelegramPlane /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Alumni speak</a></li>
              <li><a href="#">Grievance redressal</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          {/* Work with us */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Work with us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Become an instructor</a></li>
              <li><a href="#">Blog as guest</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li><a href="#">Free Courses</a></li>
              <li><a href="#">SkillUp Sitemap</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">RSS feed</a></li>
              <li><a href="#">City Sitemap</a></li>
            </ul>
          </div>

          {/* For Businesses */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5>For Businesses</h5>
            <ul className="list-unstyled">
              <li><a href="#">Corporate training</a></li>
              <li><a href="#">Simplilearn Learning Hub+</a></li>
              <li><a href="#">Guaranteed-to-run Classes</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Mobile Apps */}
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
