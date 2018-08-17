import React, { Component } from 'react';
import ReactDOM from "react-dom";

import "../../css/font_google.css"
import "../../css/linearicons.css"
import "../../css/font-awesome.min.css"
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/nice-select.css"
import "../../css/animate.min.css";
import "../../css/owl.carousel.css"
import "../../css/jquery-ui.css"
import "../../css/main.css"
class HeaderDetails extends React.Component {
  render() {
    return (
      
        <header id="header" id="home">
        
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                        <ul>
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a href="#"><i class="fa fa-behance"></i></a></li>
                        </ul>			
                    </div>
                    <div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                        <a href="tel:+953 012 3654 896"><span class="lnr lnr-phone-handset"></span> <span class="text">+91-9619123321</span></a>
                        <a href="mailto:support@colorlib.com"><span class="lnr lnr-envelope"></span> <span class="text">info@vwcs.in</span></a>			
                    </div>
                </div>			  					
            </div>
      </div>
      <div class="container main-menu">
          <div class="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.js"><img src="/img/logo.png" alt="" title="" /></a>
            </div>
            <nav id="nav-menu-container">
              <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li class="menu-has-children"><a href="">Blog</a>
                  <ul>
                    <li><a href="blog-home.html">Blog Home</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>	
                <li class="menu-has-children"><a href="">Pages</a>
                  <ul>
                        <li><a href="course-details.html">Course Details</a></li>		
                        <li><a href="event-details.html">Event Details</a></li>		
                      <li><a href="elements.html">Elements</a></li>
                        <li class="menu-has-children"><a href="">Level 2 </a>
                          <ul>
                            <li><a href="#">Item One</a></li>
                            <li><a href="#">Item Two</a></li>
                          </ul>
                        </li>					                		
                  </ul>
                </li>					          					          		          
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>	
              
      </div>
      
      </div>
      
    </header>
    );
  }
}

export default HeaderDetails;
