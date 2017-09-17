import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MinerActions from './actions/miner';

import Miner from './components/Miner';
import MinerControls from './components/MinerControls';

import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <Miner
          siteKey='pzK5983I2Ge6zm1JN6tgx98a2XeI0Ydg'
          throttle={0.5}
          running={this.props.miner.running}
        />
        <MinerControls
          actions={this.props.actions}
        />
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
