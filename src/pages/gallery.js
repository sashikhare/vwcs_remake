import React from 'react';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { GalleryPageBodyDetailsFirst, GalleryPageBodyDetailsSecond } from '../components/galleryPage';
// import GalleryPageBodyDetailsSecond from './components/galleryPage/GalleryPageBodyDetailsSecond';

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
