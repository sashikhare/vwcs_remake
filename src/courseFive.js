import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseFivePageBodyDetails_First from './components/courseFivePage/CourseFivePageBodyDetails_First';
import CourseFivePageBodyDetails_Second from './components/courseFivePage/CourseFivePageBodyDetails_Second';

import FooterDetails from './components/genric/FooterDetails';

class CourseFivePage extends React.Component {
  render() {
    return (
      <div>
        <CourseFivePageBodyDetails_First />
        <CourseFivePageBodyDetails_Second />
      </div>
    );
  }
}

export default CourseFivePage;
