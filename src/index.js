import ReactDOM from 'react-dom';
import React from 'react';
import 'isomorphic-fetch';
import 'babel-polyfill';

import Root from 'containers/root';

ReactDOM.render(
  <Root />,
  document.getElementById('mount')
);
