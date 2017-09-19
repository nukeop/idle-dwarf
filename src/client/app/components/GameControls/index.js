import React from 'react';
import FontAwesome from 'react-fontawesome';

import Statistic from '../Statistic';

import styles from './styles.scss';

class GameControls extends React.Component {
  constructor(props) {
    super(props);
  }

  sellMinerals(n, currentMinerals, mineralExchangeRate) {
    return () => {
      this.props.actions.sellMinerals(n, currentMinerals, mineralExchangeRate);
    };
  }

  render() {
    let {
      mineralExchangeRate,
      minerals
    } = this.props;

    return (
      <div className={styles.game_controls}>
        <div className='row'>
          <button onClick={this.sellMinerals(100, minerals, mineralExchangeRate)}>Sell 100</button>
          <button onClick={this.sellMinerals(minerals, minerals, mineralExchangeRate)}>Sell all</button>
        </div>
      </div>
    );
  };
}

export default GameControls;
