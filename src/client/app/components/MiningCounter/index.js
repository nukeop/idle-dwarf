import React from 'react';

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
            value={
              this.props.running
              ? <span className={styles.green}>Running</span>
              : <span className={styles.red}>Stopped</span>
            }
            label='The miner is'
          />
        </div>
        <div className={styles.row}>
          <Statistic
            value={this.props.hashesAccepted}
            label='Hashes accepted'
          />
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
