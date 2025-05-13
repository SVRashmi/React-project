import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          {/* <Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link>
          <Link to="/terms-of-use" style={styles.link}>Terms of Use</Link>
          <Link to="/sitemap" style={styles.link}>Sitemap</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link> */}
        </div>

        <div style={styles.contact}>
          <p>Email: smart.ai.academy.mail@gmail.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Address: 123 AI Street, Bengaluru, India</p>
        </div>

        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Smart AI Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#ccc",
    padding: "20px 0",
    marginTop: "50px",
    borderTop: "1px solid #333",
  },
  container: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  links: {
    marginBottom: "10px",
  },
  link: {
    margin: "0 10px",
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px",
  },
  contact: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  copyright: {
    fontSize: "13px",
    color: "#888",
  },
};

export default Footer;
