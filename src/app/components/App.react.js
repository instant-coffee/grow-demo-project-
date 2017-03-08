import React from 'react';
import Helmet from 'react-helmet';

export default class App extends React.Component {

  render() {

    return (
      <div id="app">
        <Helmet />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}