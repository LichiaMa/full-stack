import React, { Component } from 'react';
import styles from './index.css';

class List extends Component {

  render() {
    return (
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.id}>33</span>
            <span className={styles.text}>33</span>
            <span className={styles.btn}>x</span>
          </li>
        </ul>
      </div>
      
    )
  }
}

export default List;