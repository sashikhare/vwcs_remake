import React from 'react';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseOnePageBodyDetailsFirst from '../components/courseOnePage/CourseOnePageBodyDetailsFirst';
import CourseOnePageBodyDetailsSecond from '../components/courseOnePage/CourseOnePageBodyDetailsSecond';

class CourseOnePage extends React.Component {
  render() {
    return (
      <div>
        <CourseOnePageBodyDetailsFirst />
        <CourseOnePageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseOnePage;
