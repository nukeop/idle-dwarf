import React from 'react';

class Miner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      miner: null
    };
  }

  componentWillMount() {
    let {
      siteKey,
      throttle,
      running
    } = this.props;

    if(!siteKey) {
      console.error('React Miner has no site key, and cannot start.');
      return;
    }

    var miner = new CoinHive.Anonymous(siteKey);
    if (throttle) {
      miner.setThrottle(throttle);
    }

    this.setState({
      miner
    });
  }

  componentWillReceiveProps(nextProps) {
    let {
      siteKey,
      throttle,
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
  }

  render() {
    return null;
  }
}

export default Miner;
