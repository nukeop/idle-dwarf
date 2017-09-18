import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MinerActions from './actions/miner';

import Miner from './components/Miner';
import MinerControls from './components/MinerControls';
import MiningCounter from './components/MiningCounter';
import SiteHeader from './components/SiteHeader';
import VerticalPanel from './components/VerticalPanel';

import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalHashes = localStorage.totalHashes || 0;

    return (
      <div className={styles.app}>
        <SiteHeader />
        <div className={styles.app_container}>
          <VerticalPanel
            className={styles.left_panel}
          >
            <Miner
              siteKey='pzK5983I2Ge6zm1JN6tgx98a2XeI0Ydg'
              throttle={this.props.miner.throttle}
              running={this.props.miner.running}
              threads={this.props.miner.threads}
              actions={this.props.actions}
            />
            <MiningCounter
              hashesAccepted={totalHashes}
              hashesPerSecond={this.props.miner.hashesPerSecond}
              running={this.props.miner.running}
            >
              <MinerControls
                running={this.props.miner.running}
                threads={this.props.miner.threads}
                throttle={this.props.miner.throttle}
                actions={this.props.actions}
              />
            </MiningCounter>
          </VerticalPanel>
          <VerticalPanel
            className={styles.right_panel}
          >

          </VerticalPanel>

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
