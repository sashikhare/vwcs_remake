import React, { Component } from 'react';
import ReactDOM from "react-dom";


import "../../css/linearicons.css"
import "../../css/font-awesome.min.css"
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/nice-select.css"
import "../../css/animate.min.css";
import "../../css/owl.carousel.css"
import "../../css/jquery-ui.css"
import "../../css/main.css"
class ContactPageBodyDetails_Second extends React.Component {
    render() {
        return (
            <section class="contact-page-area section-gap">
				<div class="container">
					<div class="row">
						
						<div class="col-lg-4 d-flex flex-column address-wrap">
							<div class="single-contact-address d-flex flex-row">
								<div class="icon">
									<span class="lnr lnr-home"></span>
								</div>
								<div class="contact-details">
									<h5>Mumbai, India</h5>
									<p>
                                    502/503, 5th Floor, Span Landmark Building,
                                    Andheri Kurla Road, Chakala, Andheri(East),
                                    Pincode 400093
									</p>
								</div>
							</div>
							<div class="single-contact-address d-flex flex-row">
								<div class="icon">
									<span class="lnr lnr-phone-handset"></span>
								</div>
								<div class="contact-details">
									<h5>+91 (961) 9123 321</h5>
                                    <h5>+91 (900) 4935 111</h5>
									<p>Mon to Sat 9am to 6 pm</p>
								</div>
							</div>
							<div class="single-contact-address d-flex flex-row">
								<div class="icon">
									<span class="lnr lnr-envelope"></span>
								</div>
								<div class="contact-details">
									<h5>info@vwcs.in</h5>
									<p>Send us your query anytime!</p>
								</div>
							</div>														
						</div>
						<div class="col-lg-8">
							<form class="form-area contact-form text-right" id="myForm">
								<div class="row">	
									<div class="col-lg-6 form-group">
										<input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text" />
									
										<input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email" />

										<input name="subject" placeholder="Enter subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" class="common-input mb-20 form-control" required="" type="text" />
									</div>
									<div class="col-lg-6 form-group">
										<textarea class="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required=""></textarea>				
									</div>
									<div class="col-lg-12">
										<div class="alert-msg"></div>
										<button class="genric-btn primary">Send Message</button>											
									</div>
								</div>
							</form>	
						</div>
					</div>
				</div>	
			</section>
          );
}
}
export default ContactPageBodyDetails_Second;
