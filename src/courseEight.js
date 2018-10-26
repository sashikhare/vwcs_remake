import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseEightPageBodyDetails_First from './components/courseEightPage/CourseEightPageBodyDetails_First';
import CourseEightPageBodyDetails_Second from './components/courseEightPage/CourseEightPageBodyDetails_Second';

import FooterDetails from './components/genric/FooterDetails';

class CourseEightPage extends React.Component {
  render() {
    return (
      <div>
        <CourseEightPageBodyDetails_First />
        <CourseEightPageBodyDetails_Second />
      </div>
    );
  }
}

export default CourseEightPage;
