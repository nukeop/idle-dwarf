import React from 'react';
import FontAwesome from 'react-fontawesome';

import Statistic from '../Statistic';

import styles from './styles.scss';

class GameCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.game_counter}>
        <div className={styles.row}>
          <Statistic
            small
            value={this.props.minerals}
            label={<div><FontAwesome name='diamond'/> Minerals</div>}
          />
        </div>
        <div className={styles.row}>
          <Statistic
            small
            value={this.props.crowns}
            label={<div><FontAwesome name='shekel'/> Crowns</div>}
          />
        </div>
      </div>
    );
  }
}

export default GameCounter;
