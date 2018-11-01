import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseThirdPageBodyDetailsFirst from './components/courseThirdPage/CourseThirdPageBodyDetailsFirst';
import CourseThirdPageBodyDetailsSecond from './components/courseThirdPage/CourseThirdPageBodyDetailsSecond';

class CourseThirdPage extends React.Component {
  render() {
    return (
      <div>
        <CourseThirdPageBodyDetailsFirst />
        <CourseThirdPageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseThirdPage;
