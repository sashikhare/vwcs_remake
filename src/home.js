import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import BodyDetailsFirst from './components/genric/BodyDetailsFirst';
import { HomePageBodyDetailsSecond, HomePageBodyDetailsThird } from './components/homePage';
// import HomePageBodyDetailsThird from './components/homePage/HomePageBodyDetailsThird';

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
