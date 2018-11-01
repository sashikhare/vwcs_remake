import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import AboutusPageBodyDetailsFirst from './components/aboutUsPage/AboutusPageBodyDetailsFirst';
import AboutusPageBodyDetailsSecond from './components/aboutUsPage/AboutusPageBodyDetailsSecond';

class AboutusPage extends React.Component {
  render() {
    return (
      <div>
        <AboutusPageBodyDetailsFirst />
        <AboutusPageBodyDetailsSecond />
      </div>
    );
  }
}

export default AboutusPage;
