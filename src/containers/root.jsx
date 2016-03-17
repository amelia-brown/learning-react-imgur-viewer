import React, {Component, PropTypes} from 'react';
import gallery from '../components/gallery.jsx';
import promiseMiddleware from 'redux-promise-middleware';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../modules';
import Gallery from './galleries'

const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

const store = composeStoreWithMiddleware(reducers);

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
