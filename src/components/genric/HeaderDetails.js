import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import {withRouter} from 'react-router-dom'

import ContactPage from "../../contact"
import CoursesPage from "../../courses"
import SchedulePage from "../../schedule"
import GalleryPage from "../../gallery"
import AboutusPage from "../../aboutus"
import HomePage from "../../home"


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
      
        <div>
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
                    <a href="tel:+953 012 3654 896"><span class="lnr lnr-phone-handset"></span> <span class="text">+91-9619123321/+91-9004935111</span></a>
                    <a href="mailto:info@vwcs.in"><span class="lnr lnr-envelope"></span> <span class="text">info@vwcs.in</span></a>
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
                    <li><Link to="/">Home</Link></li>
                    <li class="menu-has-children"><Link to="/courses">Courses</Link>
                      </li>
                    <li><a href="courses.html">Online Courses</a></li>
                    <li><Link to="/studyMaterial">Study Material</Link></li>
                    <li><Link to="/schedule">Schedule</Link>
                    <ul>
                        <li><Link to="/courseOne">IWCF - Surface Stack: Level 2</Link></li>
                        <li><a href="blog-single.html">IWCF - Combined Surface & Subsea Stack: Level 2</a></li>
                        <li><a href="http://www.vwcs.info/moodle/course/view.php?id=14">IWCF - Surface Stack: Level 3 & 4</a></li>
                        
                        <li><a href="blog-single.html">IWCF - Combined Surface & Subsea Stack: Level 3 & 4</a></li>
                        <li><a href="blog-single.html">IADC - Surface Stack: Introductory Level</a></li>
                        <li><a href="blog-single.html">IADC - Surface Stack: Fundamental & Supervisory Level</a></li>
                        <li><a href="blog-single.html">IADC - Combined Surface & Subsea Stack: Fundamental & Supervisory Level</a></li>
                        <li><a href="blog-single.html">HSC Rig Pass</a></li>
                      </ul></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/aboutus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ">About us</Link></li>
                    <li class="menu-has-children"><Link to="/contact">Contact us</Link>
                    </li>


                  </ul>

                </nav>

              </div>

            </div>

          </header>
          
        </div>
      
    );
  }
}

export default HeaderDetails;
