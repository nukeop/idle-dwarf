import React from 'react';
import FontAwesome from 'react-fontawesome';

import Statistic from '../Statistic';

import styles from './styles.scss';

class GameControls extends React.Component {
  constructor(props) {
    super(props);
  }

  sellMinerals(n) {
    return () => {
      this.props.actions.sellMinerals(n);
    };
  }

  render() {
    return (
      <div className={styles.game_controls}>
        <div className='row'>
          <button onClick={this.sellMinerals(100)}>Sell 100</button>
          <button onClick={this.sellMinerals(this.props.minerals)}>Sell all</button>
        </div>
      </div>
    );
  };
}

export default GameControls;
