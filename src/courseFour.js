import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseFourPageBodyDetailsFirst from './components/courseFourPage/CourseFourPageBodyDetailsFirst';
import CourseFourPageBodyDetailsSecond from './components/courseFourPage/CourseFourPageBodyDetailsSecond';

class CourseFourPage extends React.Component {
  render() {
    return (
      <div>
        <CourseFourPageBodyDetailsFirst />
        <CourseFourPageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseFourPage;
