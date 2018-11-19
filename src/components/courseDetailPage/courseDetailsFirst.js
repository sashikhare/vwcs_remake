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
      <section class="banner-area relative about-banner" id="home">
        <div class="overlay overlay-bg" />
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
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
                    return <h1 class="text-white">{course_name}</h1>;
                  })
                : null}
              <p class="text-white link-nav">
                <Link to="/">Home</Link> <span class="lnr lnr-arrow-right" /> <Link to="/courses"> Schedule</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default courseDetailsFirst;
