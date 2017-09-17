import React from 'react';

import styles from './styles.scss';

class MinerControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      actions
    } = this.props;

    return (
      <div className={styles.miner_controls_container}>
        <div className={styles.row}>
          <button onClick={actions.startMining}>
            Start mining
          </button>
          <button onClick={actions.stopMining}>
            Stop mining
          </button>
        </div>
        <div className={styles.row}>

        </div>
      </div>
    );
  }
}

export default MinerControls;
