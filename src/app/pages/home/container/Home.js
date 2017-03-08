import React from 'react';
import Immutable from 'seamless-immutable';
import Octicon from 'react-octicon';
import pureRender from '../../../decorators/pureRender';

@pureRender
export default class Home extends React.Component {

  render() {
    return(
      <div id="home">
        <h1>Homepage <Octicon mega name="octoface"/></h1>
      </div>
    );
  }
}