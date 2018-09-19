import React, { Component } from 'react';



import "../../css/linearicons.css"
import "../../css/font-awesome.min.css"
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/nice-select.css"
import "../../css/animate.min.css";
import "../../css/owl.carousel.css"
import "../../css/jquery-ui.css"
import "../../css/main.css"
class FooterDetails extends React.Component {
  render() {
    return (
    
			<footer class="footer-area section-gap">
				<div class="container">
					<div class="footer-bottom row align-items-center justify-content-between">
						<p class="footer-text m-0 col-lg-6 col-md-12">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved to Vyas Well Control Sharp School.
                        </p>
						<div class="col-lg-6 col-sm-12 footer-social">
							<a href="https://www.facebook.com/vyaswellcontrolschool/"><i class="fa fa-facebook"></i></a>
							
							
						</div>
					</div>						
				</div>
			</footer>
    );
  }
}

export default FooterDetails;
