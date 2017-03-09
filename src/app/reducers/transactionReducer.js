import * as types from '../actions/actionTypes';  
import initialState from '../state';

export default function transactionReducer(state = initialState.transactions, action = {}) {  
	// console.log('here');
  switch(action.type) {
    case types.LOAD_TRANSACTIONS_SUCCESS:
    // return new transaction collection
      return action.transactions
    default: 
      return state;
    }
}