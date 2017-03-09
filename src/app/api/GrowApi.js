class GrowApi {
  static getAllTransactions() {
	  return fetch('http://demo7235469.mockable.io/transactions').then(response => {
	  	console.log(response);
	    return response.json()
  	}).catch(error => {
    	return error;
  	});
  }
}

export default GrowApi;