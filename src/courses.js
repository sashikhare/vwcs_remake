import React from 'react';

import './index.css';

import CoursesPageBodyDetailsFirst from './components/coursesPage/CoursePageBodyDetailsFirst';
import CoursePageBodyDetailsSecond from './components/coursesPage/CoursePageBodyDetailsSecond';

class CoursesPage extends React.Component {
  render() {
    return (
      <div>
        <CoursesPageBodyDetailsFirst />
        <CoursePageBodyDetailsSecond />
      </div>
    );
  }
}

export default CoursesPage;
