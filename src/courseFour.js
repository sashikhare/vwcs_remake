import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseFourPageBodyDetails_First from './components/courseFourPage/CourseFourPageBodyDetails_First';
import CourseFourPageBodyDetails_Second from './components/courseFourPage/CourseFourPageBodyDetails_Second';

import FooterDetails from './components/genric/FooterDetails';

class CourseFourPage extends React.Component {
  render() {
    return (
      <div>
        <CourseFourPageBodyDetails_First />
        <CourseFourPageBodyDetails_Second />

        <FooterDetails />
      </div>
    );
  }
}

export default CourseFourPage;
