import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import '../../css/linearicons.css';
import '../../css/font-awesome.min.css';
import '../../css/bootstrap.css';
import '../../css/magnific-popup.css';
import '../../css/nice-select.css';
import '../../css/animate.min.css';
import '../../css/owl.carousel.css';
import '../../css/jquery-ui.css';
import '../../css/main.css';

import BasicCourse from './basicCourse';
import IntermediateCourse from './intermediateCourse';
import HighCourse from './highCourse';
import CourseThreeTimeTable from './courseThreeTimeTable';
import CourseFourTimeTable from './courseFourTimeTable';
import CourseSixTimeTable from './courseSixTimeTable';
import CourseSevenTimeTable from './courseSevenTimeTable';

class courseDetailsFirst extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    const course_id = this.props.course_id;
    console.log('didmoitn' + course_id);
    fetch('http://localhost:3000/course_api?course_id=' + course_id)
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const course_id = this.props.course_id;
    console.log(this.props);
    console.log('test' + course_id);

    console.log('Testing Purpose');
    const { isLoading, data, error } = this.state;
    return (
      <section class="popular-courses-area section-gap courses-page">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-80 col-lg-11">
              <div class="title text-center">
                {!isLoading && data
                  ? data.result.map(user => {
                      const {
                        course_name,
                        detail,
                        duration,
                        overview_para1,
                        overview_para2,
                        overview_para3,
                        overview_para4,
                        overview_para5,
                        overview_para6,
                        overview_para7,
                        inr_fees,
                        usd_fees,
                        gst,
                        course_type,
                      } = user;
                      return <h1 class="mb-10">{course_type} Course</h1>;
                    })
                  : null}

                <div>
                  <h4 align="left">
                    <u>Course Details</u>
                  </h4>

                  {!isLoading && data
                    ? data.result.map(user => {
                        const {
                          course_name,
                          detail,
                          duration,
                          overview_para1,
                          overview_para2,
                          overview_para3,
                          overview_para4,
                          overview_para5,
                          overview_para6,
                          overview_para7,
                          inr_fees,
                          usd_fees,
                          gst,
                          course_type,
                        } = user;
                        return (
                          <p>
                            <h5 align="left" class="header-gap">
                              {detail}
                            </h5>
                            <h6 align="left">Duration : {duration} Days</h6>
                          </p>
                        );
                      })
                    : null}
                </div>
                <div>
                  <h4 align="left">
                    <u>Course Objective</u>
                  </h4>
                  {!isLoading && data
                    ? data.result.map(user => {
                        const {
                          id,
                          course_name,
                          detail,
                          duration,
                          overview_para1,
                          overview_para2,
                          overview_para3,
                          overview_para4,
                          overview_para5,
                          overview_para6,
                          overview_para7,
                          inr_fees,
                          usd_fees,
                          gst,
                          course_type,
                        } = user;
                        console.log(course_type + id);
                        return (
                          <div>
                            {(id === 1 || id === 2 || id === 5 || id === 8) && <BasicCourse />}
                            {(id === 3 || id === 4) && <IntermediateCourse />}
                            {(id === 6 || id === 7) && <HighCourse />}
                          </div>
                        );
                      })
                    : null}
                </div>
                <div>
                  <h4 align="left">
                    <u>Course Overview</u>
                  </h4>
                  {!isLoading && data
                    ? data.result.map(user => {
                        const {
                          id,
                          course_name,
                          detail,
                          duration,
                          overview_para1,
                          overview_para2,
                          overview_para3,
                          overview_para4,
                          overview_para5,
                          overview_para6,
                          overview_para7,
                          inr_fees,
                          usd_fees,
                          gst,
                          course_type,
                        } = user;
                        console.log(course_type + id);
                        return (
                          <div>
                            <p class="header-gap" align="justify">
                              {overview_para1}
                            </p>
                            <p align="justify">{overview_para2}</p>
                            <p align="justify">{overview_para3}</p>
                            <p align="justify">{overview_para4}</p>
                            <p align="justify">{overview_para5}</p>
                            <p align="justify">{overview_para6}</p>
                            <p align="justify">{overview_para7}</p>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div>
                  <h4 align="left">
                    <u>Course Fees</u>
                  </h4>
                  <p>
                    {!isLoading && data
                      ? data.result.map(user => {
                          const {
                            id,
                            course_name,
                            detail,
                            duration,
                            overview_para1,
                            overview_para2,
                            overview_para3,
                            overview_para4,
                            overview_para5,
                            overview_para6,
                            overview_para7,
                            inr_fees,
                            usd_fees,
                            gst,
                            course_type,
                            total,
                          } = user;
                          console.log(course_type + id);

                          return (
                            <div>
                              {(id === 1 || id === 2 || id === 5 || id === 8) && (
                                <h5 align="left" class="header-gap">
                                  INR : ₹ {inr_fees}+ {gst}% GST, Total is <u>₹ {total}</u>
                                </h5>
                              )}
                              {(id === 3 || id === 4 || id === 6 || id === 7) && (
                                <div>
                                  <h5 align="left" class="header-gap">
                                    INR : ₹ {inr_fees} + {gst}% GST, Total is <u>₹ {total}</u>
                                  </h5>
                                  <h5 align="left" class="header-gap">
                                    USD : $ {usd_fees}
                                  </h5>
                                </div>
                              )}
                            </div>
                          );
                        })
                      : null}
                  </p>
                  <p align="justify">
                    Fee including registration and exam fee, breakfast, lunch, high tea, study material, stationeries. This fee does not
                    include accommodation and transportation.
                  </p>
                </div>
                <div>
                  <h4 align="left">
                    <u>Course Schedule</u>
                  </h4>
                  {!isLoading && data
                    ? data.result.map(user => {
                        const {
                          id,
                          course_name,
                          detail,
                          duration,
                          overview_para1,
                          overview_para2,
                          overview_para3,
                          overview_para4,
                          overview_para5,
                          overview_para6,
                          overview_para7,
                          inr_fees,
                          usd_fees,
                          gst,
                          course_type,
                        } = user;
                        console.log(course_type + id);
                        return (
                          <div>
                            {(id === 1 || id === 2 || id === 5 || id === 8) && (
                              <p align="justify" class="header-gap">
                                We require minimum 4 to 5 candidates to arrange this course, for more clarification please contact to us.
                              </p>
                            )}
                            {id === 3 && <CourseThreeTimeTable />}
                            {id === 4 && <CourseFourTimeTable />}
                            {id === 6 && <CourseSixTimeTable />}
                            {id === 7 && <CourseSevenTimeTable />}
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
              <div class="clear-fix" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default courseDetailsFirst;
