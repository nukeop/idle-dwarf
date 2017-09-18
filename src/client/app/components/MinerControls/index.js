import React from 'react';

import styles from './styles.scss';

class MinerControls extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleMining(running, actions) {
    if (running) {
      return actions.stopMining;
    } else {
      return actions.startMining;
    }
  }

  changeThreadsNumber(actions) {
    return event => {
      actions.updateThreadsNumber(event.target.value);
    }
  }

  changeThrottle(actions) {
    return event => {
      actions.updateThrottle(event.target.value);
    }
  }

  render() {
    let {
      running,
      threads,
      throttle,
      actions
    } = this.props;

    return (
      <div className={styles.miner_controls_container}>
        <div className={styles.row}>
          <button onClick={this.toggleMining(running, actions)}>
            {
              running
              ? 'Stop'
              : 'Mine'
            }
          </button>
        </div>
        <div className={styles.row}>
          <h2>Threads: {threads}</h2>
        </div>
        <div className={styles.row}>
          <input onChange={this.changeThreadsNumber(actions)} type='range' min='1' max='8' value={threads}></input>
        </div>
        <div className={styles.row}>
          <h2>Throttle: {throttle}</h2>
        </div>
        <div className={styles.row}>
          <input onChange={this.changeThrottle(actions)} type='range' min='0.0' max='1.0' step='0.1' value={throttle}></input>
        </div>
      </div>
    );
  }
}

export default MinerControls;
