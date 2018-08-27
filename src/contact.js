import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import ContactPageBodyDetails_First from "./components/contatPage/ContactPageBodyDetails_First"
import ContactPageBodyDetails_Second from "./components/contatPage/ContactPageBodyDetails_Second"

import FooterDetails from "./components/genric/FooterDetails"



class ContactPage extends React.Component {
    render() {
      return (
          
        <div>
          
          <ContactPageBodyDetails_First></ContactPageBodyDetails_First>
          <ContactPageBodyDetails_Second></ContactPageBodyDetails_Second>
          <FooterDetails></FooterDetails>
          
        </div>
        
      );
    }
  }

  export default ContactPage

