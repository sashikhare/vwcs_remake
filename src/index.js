import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import HeaderDetails from "./components/homePage/HeaderDetails"
import BodyDetails_First from "./components/homePage/BodyDetails_First"
import BodyDetails_Second from "./components/homePage/BodyDetails_Second"
import BodyDetails_Third from "./components/homePage/BodyDetails_Third"
import FooterDetails from "./components/homePage/FooterDetails"

const rootElement = document.getElementById("root");
class HomePage extends React.Component {
    render() {
      return (
          <html class="no-js">
        <div>
          <HeaderDetails></HeaderDetails>
          <BodyDetails_First></BodyDetails_First>
          <BodyDetails_Second></BodyDetails_Second>
          <BodyDetails_Third></BodyDetails_Third>
          <FooterDetails></FooterDetails>
        </div>
        </html>
      );
    }
  }
ReactDOM.render(<HomePage />, document.getElementById('root'));

