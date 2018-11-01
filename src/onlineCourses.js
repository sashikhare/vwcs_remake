import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import OnlineCoursesPageBodyDetailsFirst from './components/onlineCoursesPage/OnlineCoursesPageBodyDetailsFirst';
import OnlineCoursesPageBodyDetailsSecond from './components/onlineCoursesPage/OnlineCoursesPageBodyDetailsSecond';

class OnlineCoursesPage extends React.Component {
  render() {
    return (
      <div>
        <OnlineCoursesPageBodyDetailsFirst />
        <OnlineCoursesPageBodyDetailsSecond />
      </div>
    );
  }
}

export default OnlineCoursesPage;
