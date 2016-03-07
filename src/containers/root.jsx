import React, {Component, PropTypes} from 'react';
import Gallery from '../components/gallery.jsx';

export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <Gallery />
      </div>
    );
  }
}
