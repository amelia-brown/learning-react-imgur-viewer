import React, {Component, PropTypes} from 'react';
import Gallery from '../components/gallery.jsx';
import promiseMiddleware from 'redux-promise-middleware';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../modules';

const store = composeStoreWithMiddleware(reducers);

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

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
