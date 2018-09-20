import React, { Component } from 'react';
import Add from './add';
import List from './list';

class Heroes extends Component {
  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <Add />
        <List />
      </div>
    );
  }
}

export default Heroes;
