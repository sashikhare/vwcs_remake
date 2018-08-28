import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseThirdPageBodyDetails_First from "./components/courseThirdPage/CourseThirdPageBodyDetails_First"
import CourseThirdPageBodyDetails_Second from "./components/courseThirdPage/CourseThirdPageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class CourseThirdPage extends React.Component {
    render() {
      return (
          
        <div>
          
          <CourseThirdPageBodyDetails_First></CourseThirdPageBodyDetails_First>
          <CourseThirdPageBodyDetails_Second></CourseThirdPageBodyDetails_Second>
          
          
          <FooterDetails></FooterDetails>
          
        </div>
        
      );
    }
  }

  export default CourseThirdPage

