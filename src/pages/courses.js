import React from 'react';

import { CoursePageBodyDetailsFirst, CoursePageBodyDetailsSecond } from '../components/coursesPage';
// import CoursePageBodyDetailsSecond from './components/coursesPage/CoursePageBodyDetailsSecond';

class CoursesPage extends React.Component {
  render() {
    return (
      <div>
        <CoursePageBodyDetailsFirst />
        <CoursePageBodyDetailsSecond />
      </div>
    );
  }
}

export default CoursesPage;
