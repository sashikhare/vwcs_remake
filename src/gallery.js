import React from 'react';

import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import GalleryPageBodyDetails_First from './components/galleryPage/GalleryPageBodyDetails_First';
import GalleryPageBodyDetails_Second from './components/galleryPage/GalleryPageBodyDetails_Second';
import FooterDetails from './components/genric/FooterDetails';

class GalleryPage extends React.Component {
  render() {
    return (
      <div>
        <GalleryPageBodyDetails_First />
        <GalleryPageBodyDetails_Second />
        <FooterDetails />
      </div>
    );
  }
}

export default GalleryPage;
