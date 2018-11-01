import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import ContactPageBodyDetailsFirst from './components/contatPage/ContactPageBodyDetailsFirst';
import ContactPageBodyDetailsSecond from './components/contatPage/ContactPageBodyDetailsSecond';
import ContactPageBodyDetailsThird from './components/contatPage/ContactPageBodyDetailsThird';

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <ContactPageBodyDetailsFirst />
        <ContactPageBodyDetailsThird />
        <ContactPageBodyDetailsSecond />
      </div>
    );
  }
}

export default ContactPage;
