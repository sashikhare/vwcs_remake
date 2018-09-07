import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseEightPageBodyDetails_First from "./components/courseEightPage/CourseEightPageBodyDetails_First"
import CourseEightPageBodyDetails_Second from "./components/courseEightPage/CourseEightPageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class CourseEightPage extends React.Component {
    render() {
      return (
          
        <div>
          
          <CourseEightPageBodyDetails_First></CourseEightPageBodyDetails_First>
          <CourseEightPageBodyDetails_Second></CourseEightPageBodyDetails_Second>
          
          
          <FooterDetails></FooterDetails>
          
        </div>
        
      );
    }
  }

  export default CourseEightPage

