import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import GalleryPageBodyDetailsFirst from './components/galleryPage/GalleryPageBodyDetailsFirst';
import GalleryPageBodyDetailsSecond from './components/galleryPage/GalleryPageBodyDetailsSecond';

class GalleryPage extends React.Component {
  render() {
    return (
      <div>
        <GalleryPageBodyDetailsFirst />
        <GalleryPageBodyDetailsSecond />
      </div>
    );
  }
}

export default GalleryPage;
