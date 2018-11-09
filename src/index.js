import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import {withRouter} from 'react-router-dom'

import ContactPage from './pages/contact';
import CoursesPage from './pages/courses';
import SchedulePage from './pages/schedule';
import GalleryPage from './pages/gallery';
import AboutusPage from './pages/aboutus';
import HomePage from './pages/home';
import CourseOnePage from './pages/courseOne';
import CourseSecondPage from './pages/courseSecond';
import CourseThirdPage from './pages/courseThird';
import CourseFourPage from './pages/courseFour';
import CourseFivePage from './pages/courseFive';
import CourseSixPage from './pages/courseSix';
import CourseSevenPage from './pages/courseSeven';
import CourseEightPage from './pages/courseEight';
import StudyMaterialPage from './pages/studyMaterial';
import OnlineCoursesPage from './pages/onlineCourses';

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
