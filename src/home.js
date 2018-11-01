import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import BodyDetailsFirst from './components/genric/BodyDetailsFirst';
import HomePageBodyDetailsSecond from './components/homePage/HomePageBodyDetailsSecond';
import HomePageBodyDetailsThird from './components/homePage/HomePageBodyDetailsThird';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <BodyDetailsFirst />
        <HomePageBodyDetailsSecond />
        <HomePageBodyDetailsThird />
      </div>
    );
  }
}
export default HomePage;
