import React from 'react';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import CourseSixPageBodyDetailsFirst from '../components/courseSixPage/CourseSixPageBodyDetailsFirst';
import CourseSixPageBodyDetailsSecond from '../components/courseSixPage/CourseSixPageBodyDetailsSecond';

class CourseSixPage extends React.Component {
  render() {
    return (
      <div>
        <CourseSixPageBodyDetailsFirst />
        <CourseSixPageBodyDetailsSecond />
      </div>
    );
  }
}

export default CourseSixPage;
