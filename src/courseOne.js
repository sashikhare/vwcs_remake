import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseOnePageBodyDetails_First from "./components/courseOnePage/CourseOnePageBodyDetails_First"
import ContactPageBodyDetails_Second from "./components/contatPage/ContactPageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class CourseOnePage extends React.Component {
    render() {
      return (
          
        <div>
          
          <CourseOnePageBodyDetails_First></CourseOnePageBodyDetails_First>
          
          <FooterDetails></FooterDetails>
          
        </div>
        
      );
    }
  }

  export default CourseOnePage

