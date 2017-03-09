import {
  combineReducers,
  routerReducer
} from 'redux-seamless-immutable';

import transactions from './transactionReducer';

const rootReducer = combineReducers({
	transactions: transactions,
  routing: routerReducer
})

export default rootReducer