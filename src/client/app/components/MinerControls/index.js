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

  render() {
    let {
      running,
      threads,
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
      </div>
    );
  }
}

export default MinerControls;
