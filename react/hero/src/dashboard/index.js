import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';
import { HeroesContext } from '../context';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Top Heroes</h2>
        <HeroesContext.Consumer>
          {
            context => {
              return (
                <div className={styles.list}>
                  {
                  context.heroes.slice(0, 4).map(hero => {
                    return (
                      <Link 
                        key={hero.id}
                        className={styles.item}
                        to={{
                         pathname:`/detail/${hero.id}`
                        }}>
                        {hero.name}
                      </Link>
                    )
                  })
                }
                </div>
              )
            }
          }
        </HeroesContext.Consumer>
      </div>
    );
  }
}

export default Dashboard;
