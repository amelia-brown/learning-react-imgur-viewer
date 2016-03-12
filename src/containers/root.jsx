import React, {Component, PropTypes} from 'react';
import Gallery from '../components/gallery.jsx';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import imgurApp from '../modules';

let store = createStore(imgurApp);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="root">
        <Gallery />
      </div>
      </Provider>
    );
  }
}
