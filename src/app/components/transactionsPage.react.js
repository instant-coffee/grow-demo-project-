import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';  
import * as actions from '../actions/index';
import TransactionList from './TransactionList.react';

class TransactionsPage extends React.Component {
  componentWillMount() {
    console.log("here", this.props);
    if (this.props.transactions.id == ''){
      this.props.actions.loadTransactions();
    }
  }  
  render() {
    const transactions = this.props.transactions;
    return (
      <div className="one-fourth">
        <h1>transactions <Link to={'/transactions/new'} className="btn btn-primary">+ message</Link></h1>
        <div className="one-fourth">
          <TransactionList transactions={transactions} />
        </div>
        <div className="one-fourth">
          {this.props.children}
        </div>
      </div>
    );
  }
}

TransactionsPage.propTypes = {
	transactions: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  if (state.transactions.length > 0) {
    return {
      transactions: state.transactions    
    };
	} else {
    return {
      transactions: [{id: ''}]
    }
  }
} 

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage); 
