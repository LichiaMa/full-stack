import React, { Component } from 'react';
import styles from './index.css';

class Add extends Component {

  render() {
    return (
      <div>
        <span className={styles.label}>Hero Name:</span>
        <input className={styles.input} type="text" />
        <span className={styles.btn} >Add</span>
      </div>
      
    )
  }
}

export default Add;