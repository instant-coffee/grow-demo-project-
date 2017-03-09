import React from 'react';
import Immutable from 'seamless-immutable';
import pureRender from '../../../decorators/pureRender';
import * as actions from '../../../actions/index.js';


@pureRender
export default class Home extends React.Component {
	componentWillMount() {
		console.log("PROPS", this.props);
    if (this.props.transactions.id == ''){
      this.props.actions.loadTransactions();
    }
  }  
  render() {
    return(
      <div id="home">
        <h1>Grow</h1>

        <div className="container">
        	<h3>Accounts</h3>
        	<table>
        		<thead>
	        		<tr>
							  <th>
							  	Name
							  </th>
							  <th>
							  	Type
							  </th>
							  <th>
							  	Balance
							  </th>
							</tr>
						</thead>
						<tbody> 
							<tr> 
							  <td>blah</td>
							  <td>more</td>
							  <td>again</td>
							</tr>
							<tr> 
							  <td>blah2</td>
							  <td>more2</td>
							  <td>again2</td>
							</tr>
							<tr> 
							  <td>blah3</td>
							  <td>more3</td>
							  <td>again3</td>
							</tr>
						</tbody>  
					</table>

        </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }