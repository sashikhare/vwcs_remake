import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseSecondPageBodyDetails_First from './components/courseSecondPage/CourseSecondPageBodyDetails_First';
import CourseSecondPageBodyDetails_Second from './components/courseSecondPage/CourseSecondPageBodyDetails_Second';

import FooterDetails from './components/genric/FooterDetails';

class CourseSecondPage extends React.Component {
  render() {
    return (
      <div>
        <CourseSecondPageBodyDetails_First />
        <CourseSecondPageBodyDetails_Second />

        <FooterDetails />
      </div>
    );
  }
}

export default CourseSecondPage;
