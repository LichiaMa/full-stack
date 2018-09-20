import React, { Component } from "react";
import { withRouter } from "react-router";
import styles from './index.css';
class Detail extends Component {
  constructor() {
    super();
    this.state = { id: null, name: "" };
    this.handlerInputChange = this.handlerInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <h2>{this.state.name} Details</h2>
        <div>
          <div className={styles.item}>
            <span className={styles.label}>Id:</span>
            <span>{this.state.id}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Name:</span>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handlerInputChange}
              className={styles.input}
            />
          </div>
        </div>
        <div>
          <span className={styles.btn}>Back</span>
          <span className={styles.btn}>Save</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { match, location } = this.props;
    const id = match.params.id;
    const name = location.state.name;
    this.setState({
      id,
      name
    });
  }

  handlerInputChange() {}
}

export default withRouter(Detail);
