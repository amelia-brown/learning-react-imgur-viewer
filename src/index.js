import ReactDOM from 'react-dom';
import React from 'react';
import promiseMiddleware from 'redux-promise-middleware';

import Root from 'containers/root';

composeStoreWithMiddleWare = applyMiddleware(
  promiseMiddleware()
)(createStore);

let store = createStore(todoApp);

ReactDOM.render(
  <div><Root /></div>,
  document.getElementById('mount')
);
