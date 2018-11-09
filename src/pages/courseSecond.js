import React from 'react';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseSecondPageBodyDetailsFirst from '../components/courseSecondPage/CourseSecondPageBodyDetailsFirst';
import CourseSecondPageBodyDetailsSecond from '../components/courseSecondPage/CourseSecondPageBodyDetailsSecond';

class CourseSecondPage extends React.Component {
  render() {
    return (
      <div>
        <CourseSecondPageBodyDetailsFirst />
        <CourseSecondPageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseSecondPage;
