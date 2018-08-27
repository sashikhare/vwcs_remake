import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import StudyMaterialPageBodyDetails_First from "./components/studyMaterialPage/StudyMaterialPageBodyDetails_First"
import StudyMaterialPageBodyDetails_Second from "./components/studyMaterialPage/StudyMaterialPageBodyDetails_Second"
import HomePageBodyDetails_Second from "./components/homePage/HomePageBodyDetails_Second"
import HomePageBodyDetails_Third from "./components/homePage/HomePageBodyDetails_Third"
import FooterDetails from "./components/genric/FooterDetails"



class StudyMaterialPage extends React.Component {
    render() {
      return (
          
        <div>
          <StudyMaterialPageBodyDetails_First></StudyMaterialPageBodyDetails_First>
          <StudyMaterialPageBodyDetails_Second></StudyMaterialPageBodyDetails_Second>
          <FooterDetails></FooterDetails>
        </div>
        
      );
    }
  }

  export default StudyMaterialPage

