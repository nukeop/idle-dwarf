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
        <Statistic
          value={this.props.hashesAccepted}
          label='Hashes accepted'
        />
        <Statistic
            value={this.props.hashesPerSecond.toFixed(2)}
            label='Hashes per second'
        />
      </div>
    );
  }
}

export default MiningCounter;
