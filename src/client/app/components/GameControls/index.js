import React from 'react';
import FontAwesome from 'react-fontawesome';

import Statistic from '../Statistic';

import styles from './styles.scss';

class GameControls extends React.Component {
  constructor(props) {
    super(props);
  }

  sellMinerals(n, currentMinerals) {
    return () => {
      this.props.actions.sellMinerals(n, currentMinerals);
    };
  }

  render() {
    return (
      <div className={styles.game_controls}>
        <div className='row'>
          <button onClick={this.sellMinerals(100, this.props.minerals)}>Sell 100</button>
          <button onClick={this.sellMinerals(this.props.minerals, this.props.minerals)}>Sell all</button>
        </div>
      </div>
    );
  };
}

export default GameControls;
