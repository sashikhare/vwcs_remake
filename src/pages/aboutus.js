import React from 'react';

// ;
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { AboutusPageBodyDetailsFirst, AboutusPageBodyDetailsSecond } from '../components/aboutUsPage';
// import AboutusPageBodyDetailsSecond from './components/aboutUsPage/AboutusPageBodyDetailsSecond';

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
