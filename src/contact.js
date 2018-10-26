import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import ContactPageBodyDetails_First from './components/contatPage/ContactPageBodyDetails_First';
import ContactPageBodyDetails_Second from './components/contatPage/ContactPageBodyDetails_Second';
import ContactPageBodyDetails_Third from './components/contatPage/ContactPageBodyDetails_Third';

import FooterDetails from './components/genric/FooterDetails';
class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <ContactPageBodyDetails_First />
        <ContactPageBodyDetails_Third />
        <ContactPageBodyDetails_Second />
        <FooterDetails />
      </div>
    );
  }
}

export default ContactPage;
