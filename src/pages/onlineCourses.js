import React from 'react';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { OnlineCoursesPageBodyDetailsFirst, OnlineCoursesPageBodyDetailsSecond } from '../components/onlineCoursesPage';
// import OnlineCoursesPageBodyDetailsSecond from './components/onlineCoursesPage/OnlineCoursesPageBodyDetailsSecond';

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
