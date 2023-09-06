import * as React from 'react';
import './HeaderStyle.css'

const pages = ['Home', 'About', 'Resume', 'Projects', 'Contact Us'];

export default function ResponsiveAppBar() {

  const scrollThreshold = 850; 
  

  window.addEventListener("scroll", ()=>{
    if (window.scrollY >= scrollThreshold){

      document.getElementById("home").style.backgroundColor = "#130F49"; 
      document.getElementById("home").style.transition = "1s ease"


    }
    else{
      document.getElementById("home").style.backgroundColor = "transparent";
      document.getElementById("home").style.transition = "1s ease"

    }
  })

  return (
      <nav id="home" class="navbar navbar-expand-lg position-fixed w-100 z-1 text-light">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#"><b>Ezz Addin H. Kukhun</b></a>
          <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav-list navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a style={{color: '#d6d7ff'}} class="nav-link" aria-current="page" href="#home"><b>Home</b></a>
              </li>
              <li class="nav-item">
                <a style={{color: '#d6d7ff'}} class="nav-link" href="#about"><b>About</b></a>
              </li>
              <li class="nav-item">
                <a style={{color: '#d6d7ff'}} class="nav-link" aria-current="page" href="#edu"><b>Education</b></a>
              </li>
              <li class="nav-item">
                <a style={{color: '#d6d7ff'}} class="nav-link" href="#exp"><b>Experiences</b></a>
              </li>
              <li class="nav-item">
                <a style={{color: '#d6d7ff'}} class="nav-link" href="#projs"><b>Projects</b></a>
              </li>
              <li class="nav-item">
                <a style={{color: '#d6d7ff'}} class="nav-link" href="#contact"><b>Contact me</b></a>
              </li>


            </ul>

          </div>
        </div>
      </nav>

  );
}
