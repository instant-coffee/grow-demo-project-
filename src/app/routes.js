import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './components/App.react';
import Home from './pages/home/container/Home.js';

function lazyLoadComponent(lazyModule) {
  return (location, cb) => {
    lazyModule(module => {
      cb(null, module)
    })
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={lazyLoadComponent(Home)} />
  </Route>
);

export default routes;