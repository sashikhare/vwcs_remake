import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import OnlineCoursesPageBodyDetails_First from "./components/onlineCoursesPage/OnlineCoursesPageBodyDetails_First"
import OnlineCoursesPageBodyDetails_Second from "./components/onlineCoursesPage/OnlineCoursesPageBodyDetails_Second"
import HomePageBodyDetails_Second from "./components/homePage/HomePageBodyDetails_Second"
import HomePageBodyDetails_Third from "./components/homePage/HomePageBodyDetails_Third"
import FooterDetails from "./components/genric/FooterDetails"



class OnlineCoursesPage extends React.Component {
    render() {
      return (
          
        <div>
          <OnlineCoursesPageBodyDetails_First></OnlineCoursesPageBodyDetails_First>
          <OnlineCoursesPageBodyDetails_Second></OnlineCoursesPageBodyDetails_Second>
          <FooterDetails></FooterDetails>
        </div>
        
      );
    }
  }

  export default OnlineCoursesPage

