import React from 'react';

import styles from './styles.scss';

class Statistic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.statistic}>
        <div className={styles.value}>
          {this.props.value}
        </div>
        <div className={styles.label}>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default Statistic;
