import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { StudyMaterialPageBodyDetailsFirst, StudyMaterialPageBodyDetailsSecond } from './components/studyMaterialPage/';
// import StudyMaterialPageBodyDetailsSecond from './components/studyMaterialPage/StudyMaterialPageBodyDetailsSecond';

class StudyMaterialPage extends React.Component {
  render() {
    return (
      <div>
        <StudyMaterialPageBodyDetailsFirst />
        <StudyMaterialPageBodyDetailsSecond />
      </div>
    );
  }
}

export default StudyMaterialPage;
