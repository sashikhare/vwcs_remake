import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseSixPageBodyDetails_First from "./components/courseSixPage/CourseSixPageBodyDetails_First"
import CourseSixPageBodyDetails_Second from "./components/courseSixPage/CourseSixPageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class CourseSixPage extends React.Component {
  render() {
    return (

      <div>

        <CourseSixPageBodyDetails_First></CourseSixPageBodyDetails_First>
        <CourseSixPageBodyDetails_Second></CourseSixPageBodyDetails_Second>


        <FooterDetails></FooterDetails>

      </div>

    );
  }
}

export default CourseSixPage

