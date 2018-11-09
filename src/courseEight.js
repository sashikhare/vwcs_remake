import React from 'react';

// import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseEightPageBodyDetailsFirst from './components/courseEightPage/CourseEightPageBodyDetailsFirst';
import CourseEightPageBodyDetailsSecond from './components/courseEightPage/CourseEightPageBodyDetailsSecond';

class CourseEightPage extends React.Component {
  render() {
    return (
      <div>
        <CourseEightPageBodyDetailsFirst />
        <CourseEightPageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseEightPage;
