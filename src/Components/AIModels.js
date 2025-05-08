import React, { useState, useEffect } from "react";
import Headers from './Header'
import "./AiModels.css";
import {useLocation } from "react-router-dom";
function AiConcepts() {  
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
    <div>  
      <Headers/>
      <section>

      </section>
    </div>
  )
}

export default AiConcepts