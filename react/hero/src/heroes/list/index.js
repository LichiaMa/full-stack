import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { HeroesContext } from "../../context";
import styles from "./index.css";

class List extends Component {
  render() {
    return (
      <div>
        <div className={styles.list}>
          <HeroesContext.Consumer>
            {context => {
              return context.heroes.map(hero => {
                return (
                  <Link to={{ pathname: `/detail/${hero.id}`, state: {name:hero.name} }} className={styles.item} key={hero.id}>
                    <span className={styles.id}>{hero.id}</span>
                    <span className={styles.text}>{hero.name}</span>
                    <span className={styles.btn}>x</span>
                  </Link>
                );
              });
            }}
          </HeroesContext.Consumer>
        </div>
      </div>
    );
  }
}

export default List;
