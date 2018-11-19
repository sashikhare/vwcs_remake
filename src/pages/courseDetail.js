import React from 'react';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseDetailsFirst from '../components/courseDetailPage/courseDetailsFirst';
import CourseDetailsSecond from '../components/courseDetailPage/courseDetailsSecond';

class courseDetail extends React.Component {
  render() {
    const course_id = this.props.match.params.id;
    console.log(course_id);
    return (
      <div>
        <CourseDetailsFirst course_id={course_id} />
        <CourseDetailsSecond course_id={course_id} />
      </div>
    );
  }
}

export default courseDetail;
