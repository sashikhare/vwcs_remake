import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseSevenPageBodyDetails_First from './components/courseSevenPage/CourseSevenPageBodyDetails_First';
import CourseSevenPageBodyDetails_Second from './components/courseSevenPage/CourseSevenPageBodyDetails_Second';

import FooterDetails from './components/genric/FooterDetails';

class CourseSevenPage extends React.Component {
  render() {
    return (
      <div>
        <CourseSevenPageBodyDetails_First />
        <CourseSevenPageBodyDetails_Second />

        <FooterDetails />
      </div>
    );
  }
}

export default CourseSevenPage;
