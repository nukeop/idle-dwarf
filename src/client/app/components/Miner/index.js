import React from 'react';

class Miner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      siteKey: null,
      miner: null
    };
  }

  componentWillMount() {
    let {
      siteKey,
      throttle,
      running,
      actions
    } = this.props;

    if(!siteKey) {
      console.error('React Miner has no site key, and cannot start.');
      return;
    }

    //var miner = new CoinHive.Anonymous(siteKey);
    var miner = {
      start: () => {},
      stop: () => {},
      setThrottle: throttle => {},
      setNumThreads: threads => {},
      on: (event, callback) => {callback ({
          hashes: 128,
          hashesPerSecond: 10
      })}
    };
    if (throttle) {
      miner.setThrottle(throttle);
    }

    miner.on('accepted', params => {
      actions.hashAccepted(params.hashes);
    });

    miner.on('found', params => {
      actions.updateHashesPerSecond(params.hashesPerSecond);
    });

    if (running) {
      miner.start();
    }

    this.setState({
      siteKey,
      miner
    });
  }

  componentWillReceiveProps(nextProps) {
    let {
      siteKey,
      throttle,
      threads,
      running
    } = nextProps;

    if (running && this.state.miner) {
      this.state.miner.start();
    } else if (this.state.miner) {
      this.state.miner.stop();
    }

    if (throttle) {
      this.state.miner.setThrottle(throttle);
    }

    if (threads) {
      this.state.miner.setNumThreads(threads);
    }
  }

  render() {
    return null;
  }
}

export default Miner;
