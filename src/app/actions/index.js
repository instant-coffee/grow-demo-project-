import growApi from '../api/GrowApi';
import * as types from './actionTypes.js';

export function loadTransactionsSuccess(transactions) {  
  return {type: types.LOAD_TRANSACTIONS_SUCCESS, transactions};
}

export function loadTransactions() {
	// make async call to api, handle promise, dispatch action when promise is resolved  
  return function(dispatch) {
    return growApi.getAllTransactions().then(transactions => {
      console.log("TRANSACTIONS:", transactions);
      dispatch(loadTransactionsSuccess(transactions));
    }).catch(error => {
      throw(error);
    });
  };
}
