import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import TransactionPage from './TransactionPage';

const TransactionListRow = ({transaction}) => {
	let transactionDate = moment(transaction.created_at); 
  return (
    <tr>
      <td><Link to={'/transactions/' + transaction.id}>{transactionDate.format('MMM do')}  -  {transaction.amount}</Link></td>
    </tr>
  );
};

TransactionListRow.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default TransactionListRow;