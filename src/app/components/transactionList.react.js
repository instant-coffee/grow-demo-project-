import React, {PropTypes} from 'react';

const TransactionList = ({transactions}) => { 
  return (
      <table className="table">
        <thead>
          <tr>
            <th>Grow Transaction List</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => 
              <TransactionListRow key={transaction.id} transaction={transaction} />
          )}
        </tbody>
    </table>
  );
};

TransactionList.propTypes = {  
  transactions: PropTypes.array.isRequired
};

export default TransactionList;  
