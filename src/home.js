import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import HeaderDetails from './components/genric/HeaderDetails';
import BodyDetails_First from './components/genric/BodyDetails_First';
import HomePageBodyDetails_Second from './components/homePage/HomePageBodyDetails_Second';
import HomePageBodyDetails_Third from './components/homePage/HomePageBodyDetails_Third';
import FooterDetails from './components/genric/FooterDetails';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <BodyDetails_First />
        <HomePageBodyDetails_Second />
        <HomePageBodyDetails_Third />
      </div>
    );
  }
}
export default HomePage;
