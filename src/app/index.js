require('../styles/main.scss');

import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import routes from './routes';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);