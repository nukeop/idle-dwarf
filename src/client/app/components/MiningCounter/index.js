import React from 'react';
import classnames from 'classnames';

import Statistic from '../Statistic';

import styles from './styles.scss';

class MiningCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mining_counter}>
        <div className={styles.row}>
          <Statistic
            inverted
            small
            flexible
            value={
              this.props.running
              ? <div className={classnames(styles.status, styles.green)}>Running</div>
              : <div className={classnames(styles.status, styles.red)}>Stopped</div>
            }
            label='Mining is'
          />
        </div>
        <div className={styles.row}>
          {this.props.children}
        </div>
        <div className={styles.row}>
          <Statistic
            value={this.props.hashesAccepted}
            label='Hashes accepted'
          />
        </div>
        <div className={styles.row}>
          <Statistic
              value={this.props.hashesPerSecond.toFixed(2)}
              label='Hashes per second'
          />
        </div>
      </div>
    );
  }
}

export default MiningCounter;
