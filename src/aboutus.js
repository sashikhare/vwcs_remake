import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';


import AboutusPageBodyDetails_First from "./components/aboutUsPage/AboutusPageBodyDetails_First"
import AboutusPageBodyDetails_Second from "./components/aboutUsPage/AboutusPageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class AboutusPage extends React.Component {
  render() {
    return (

      <div>
        <AboutusPageBodyDetails_First></AboutusPageBodyDetails_First>
        <AboutusPageBodyDetails_Second></AboutusPageBodyDetails_Second>

        <FooterDetails></FooterDetails>
      </div>

    );
  }
}

export default AboutusPage

