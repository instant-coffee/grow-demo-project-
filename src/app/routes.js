import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './components/App.react';
import Home from './pages/home/container/Home.js';
import TransactionList from './components/transactionList.react';
import Transactionsage from './components/transactionsPage.react';

// function lazyLoadComponent(lazyModule) {
//   return (location, cb) => {
//     lazyModule(module => {
//       cb(null, module)
//     })
//   }
// }

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
   	<Route path="/transactions" component={TransactionsPage} />
  </Route>
);

export default routes;