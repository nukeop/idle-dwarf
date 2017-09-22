import React from 'react';

import BuildingsList from './BuildingsList';

import styles from './styles.scss';

class MinePane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mine_pane}>
        <BuildingsList
          currentBuildings={this.props.currentBuildings}
          crowns={this.props.crowns}
        />
      </div>
    );
  }
}

export default MinePane;
