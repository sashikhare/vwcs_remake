import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import {withRouter} from 'react-router-dom'

import ContactPage from './contact';
import CoursesPage from './courses';
import SchedulePage from './schedule';
import GalleryPage from './gallery';
import AboutusPage from './aboutus';
import HomePage from './home';
import CourseOnePage from './courseOne';
import CourseSecondPage from './courseSecond';
import CourseThirdPage from './courseThird';
import CourseFourPage from './courseFour';
import CourseFivePage from './courseFive';
import CourseSixPage from './courseSix';
import CourseSevenPage from './courseSeven';
import CourseEightPage from './courseEight';
import StudyMaterialPage from './studyMaterial';
import OnlineCoursesPage from './onlineCourses';

import HeaderDetails from './components/genric/HeaderDetails';
import FooterDetails from './components/genric/FooterDetails';

const rootElement = document.getElementById('root');
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderDetails />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/aboutus" component={AboutusPage} />
            <Route exact path="/courseOne" component={CourseOnePage} />
            <Route exact path="/courseSecond" component={CourseSecondPage} />
            <Route exact path="/courseThird" component={CourseThirdPage} />
            <Route exact path="/courseFour" component={CourseFourPage} />
            <Route exact path="/courseFive" component={CourseFivePage} />
            <Route exact path="/courseSix" component={CourseSixPage} />
            <Route exact path="/courseSeven" component={CourseSevenPage} />
            <Route exact path="/courseEight" component={CourseEightPage} />
            <Route exact path="/studyMaterial" component={StudyMaterialPage} />
            <Route exact path="/onlineCourses" component={OnlineCoursesPage} />
          </Switch>
          <FooterDetails />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
