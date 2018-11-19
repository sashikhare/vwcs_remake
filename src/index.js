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

import StudyMaterialPage from './pages/studyMaterial';
import OnlineCoursesPage from './pages/onlineCourses';
import CourseDetail from './pages/courseDetail';

import HeaderDetails from './components/genric/HeaderDetails';
import FooterDetails from './components/genric/FooterDetails';

// const rootElement = document.getElementById('root');
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
            <Route exact path="/studyMaterial" component={StudyMaterialPage} />
            <Route exact path="/onlineCourses" component={OnlineCoursesPage} />
            <Route exact path="/:id" component={CourseDetail} />
          </Switch>
          <FooterDetails />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
