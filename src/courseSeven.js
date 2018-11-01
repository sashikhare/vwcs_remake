import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseSevenPageBodyDetailsFirst from './components/courseSevenPage/CourseSevenPageBodyDetailsFirst';
import CourseSevenPageBodyDetailsSecond from './components/courseSevenPage/CourseSevenPageBodyDetailsSecond';

class CourseSevenPage extends React.Component {
  render() {
    return (
      <div>
        <CourseSevenPageBodyDetailsFirst />
        <CourseSevenPageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseSevenPage;
