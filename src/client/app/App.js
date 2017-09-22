import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GameActions from './actions/game';
import * as MinerActions from './actions/miner';

import GameControls from './components/GameControls';
import GameCounter from './components/GameCounter';
import Miner from './components/Miner';
import MinerControls from './components/MinerControls';
import MiningCounter from './components/MiningCounter';
import SiteHeader from './components/SiteHeader';
import VerticalPanel from './components/VerticalPanel';
import Tabs from './components/Tabs';

// Panes
import MinePane from './components/MinePane';

import styles from './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  componentWillMount() {
    // Global init
    this.props.actions.loadBuildingsDefinitions();
    this.props.actions.initCurrentBuildings();
  }

  render() {
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
              hashesAccepted={this.props.miner.hashesAccepted}
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
            className={styles.middle_panel}
          >
            <Tabs
              activeIndex={this.state.activeTab}
              tabs={['Your Mine', 'Upgrades', 'Achievements', 'Settings']}
              panes={[
                <MinePane
                  buildingsDefinitions={this.props.game.buildingsDefinitions}
                  currentBuildings={this.props.game.currentBuildings}
                  crowns={this.props.game.currentCrowns}
                />
              ]}
              onTabClicked={tabIndex => {this.setState({activeTab: tabIndex})}}
            />
          </VerticalPanel>
          <VerticalPanel
            className={styles.right_panel}
          >
            <GameControls
              mineralExchangeRate={this.props.game.mineralExchangeRate}
              minerals={this.props.game.currentMinerals}
              actions={this.props.actions}
            />
            <GameCounter
              minerals={this.props.game.currentMinerals}
              crowns={this.props.game.currentCrowns}
            />
          </VerticalPanel>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    miner: state.miner,
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},
      GameActions,
      MinerActions
    ), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
