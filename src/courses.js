import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




import CoursesPageBodyDetails_First from "./components/coursesPage/CoursePageBodyDetails_First"
import CoursePageBodyDetails_Second from "./components/coursesPage/CoursePageBodyDetails_Second"
import FooterDetails from "./components/genric/FooterDetails"



class CoursesPage extends React.Component {
    render() {
      return (
          
        <div>
          
         <CoursesPageBodyDetails_First></CoursesPageBodyDetails_First>
         <CoursePageBodyDetails_Second></CoursePageBodyDetails_Second>
          <FooterDetails></FooterDetails>
        </div>
        
      );
    }
  }

  export default CoursesPage

