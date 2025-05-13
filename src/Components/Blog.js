import React from 'react'
import Headers from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";
import Footer from "./Footer";
function Blog() {
  return (
    
    <div>
    <section> 
    <div className="bg-img">
    {/* <img src={`${process.env.PUBLIC_URL}/Images/Blog.jpg`}  alt="Blog"/> */}
    </div>
    </section>
    <section>
    <div class="container mb-5">
    <Headers />
    <h2 class="my-5 text-center"> Blog</h2>
    <div className='d-flex gap-5 mb-5'>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto" >
    <div className="card-body">
    <FontAwesomeIcon icon={faPersonChalkboard} size="2xl" className='icon_style'/>
    <h5 className="card-title  fw-bold">10 Essential Bash Shell Commands for Data Science</h5>
    <p className="card-text text-dark">
    10 essential Bash shell commands every data scientist should know commands that save time, simplify tasks.</p>
    
    <p className="card-text text-dark">
    <i>By Shittu Olumide, Technical Content Specialist</i>
    </p>
    <a href="https://www.kdnuggets.com/10-essential-bash-shell-commands-for-data-science" className="btn btn-primary bg-color width_cust" target='_blank'>Read More</a>
    </div>
    </div>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto " >
    <div className="card-body">
    <FontAwesomeIcon icon={faLaptopFile} size="2xl" className='icon_style background_color_1'  />
    <h5 className="card-title  fw-bold">Exploring the Convergence of Artificial Intelligence and Neuroscience</h5>
    <p className="card-text text-dark">
    Exploring the Convergence of Artificial Intelligence and Neuroscience</p>
    
    <p className="card-text text-dark">
    <i>By Adrien Payong, AI consultant and technical writer</i>
    </p>
    <a href="https://www.digitalocean.com/community/tutorials/neuroscience-and-artificial-intelligence" className="btn btn-primary bg-color width_cust" target='_blank'>Read More</a>
    </div>
    </div>
    
    </div>
    <div className='d-flex gap-5'>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto" >
    <div className="card-body">
    <FontAwesomeIcon icon={faPersonChalkboard} size="2xl" className='icon_style'/>
    <h5 className="card-title  fw-bold">Python Data Structures Every Programmer Should Know</h5>
    <p className="card-text text-dark">
    Write better Python by mastering the built-in and standard library data structures for clean, efficient, and elegant code.</p>
    
    <p className="card-text text-dark">
    <i>By Bala Priya C, Editor & Technical Content Specialist</i>
    </p>
    <a href="https://www.kdnuggets.com/python-data-structures-every-programmer-should-know" className="btn btn-primary bg-color width_cust" target='_blank'>Read More</a>
    
    
    </div>
    </div>
    <div className="card text-center shadow-lg border-0 rounded-4 mx-auto " >
    <div className="card-body">
    <FontAwesomeIcon icon={faLaptopFile} size="2xl" className='icon_style background_color_1'  />
    <h5 className="card-title  fw-bold"> 10 Free Machine Learning Books For 2025
    </h5>
    <p className="card-text text-dark">
    Are you interested in enhancing your machine learning skills? We have put together an outstanding list of free machine learning books to aid your learning journey!</p>
    <p className="card-text text-dark">
    <i>By Cornellius Yudha Wijaya,  Technical Content Specialist</i>
    </p>
    <a href=" https://www.kdnuggets.com/10-free-machine-learning-books-for-2025" className="btn btn-primary bg-color width_cust" target='_blank'>Read More</a>
    </div>
    </div>
    </div>
    </div></section>
    <section>
      <Footer/>
    </section>
    </div>
  )
}

export default Blog