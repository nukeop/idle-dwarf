import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MinerActions from './actions/miner';

import Miner from './components/Miner';
import MinerControls from './components/MinerControls';
import MiningCounter from './components/MiningCounter';

import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.app_container}>
          <Miner
            siteKey='pzK5983I2Ge6zm1JN6tgx98a2XeI0Ydg'
            throttle={0.5}
            running={this.props.miner.running}
            actions={this.props.actions}
          />
          <MinerControls
            actions={this.props.actions}
          />
          <MiningCounter
            hashesAccepted={this.props.miner.hashesAccepted}
            hashesPerSecond={this.props.miner.hashesPerSecond}
            running={this.props.miner.running}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    miner: state.miner
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},
      MinerActions
    ), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
