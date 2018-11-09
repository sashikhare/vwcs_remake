import React from 'react';

// import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseFivePageBodyDetailsFirst from './components/courseFivePage/CourseFivePageBodyDetailsFirst';
import CourseFivePageBodyDetailsSecond from './components/courseFivePage/CourseFivePageBodyDetailsSecond';

class CourseFivePage extends React.Component {
  render() {
    return (
      <div>
        <CourseFivePageBodyDetailsFirst />
        <CourseFivePageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseFivePage;
