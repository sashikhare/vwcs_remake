import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import {withRouter} from 'react-router-dom'

import ContactPage from "./contact"
import CoursesPage from "./courses"
import SchedulePage from "./schedule"
import GalleryPage from "./gallery"
import AboutusPage from "./aboutus"
import HomePage from "./home"
import CourseOnePage from "./courseOne"
import StudyMaterialPage from "./studyMaterial"


import HeaderDetails from "./components/genric/HeaderDetails"
import BodyDetails_First from "./components/genric/BodyDetails_First"
import HomePageBodyDetails_Second from "./components/homePage/HomePageBodyDetails_Second"
import HomePageBodyDetails_Third from "./components/homePage/HomePageBodyDetails_Third"
import FooterDetails from "./components/genric/FooterDetails"




const rootElement = document.getElementById("root");
class App extends React.Component {
    render() {
      return (
          
        
          <Router>
            <div>
          <HeaderDetails></HeaderDetails>
          <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/aboutus" component={AboutusPage} />
            <Route exact path="/courseOne" component={CourseOnePage} />
            <Route exact path="/studyMaterial" component={StudyMaterialPage} />
          </Switch>
          </div>
          </Router>
          
        
        
      );
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));

