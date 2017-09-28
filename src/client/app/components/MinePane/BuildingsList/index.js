import React from 'react';

import Building from '../Building';

import styles from './styles.scss';

class BuildingsList extends React.Component {
  constructor(props) {
    super(props);
  }

  buyBuilding(buildingName, currentBuildings, currentCrowns) {
    return () => {
      this.props.buyBuilding(buildingName, 1, currentBuildings, currentCrowns);
    }
  }

  render() {
    let {
      currentBuildings,
      crowns
    } = this.props;

    return (
      <div className={styles.buildings_list}>
        {
          currentBuildings.map(building => {
            return (
              <Building
                name={building.name}
                description={building.description}
                number={building.number}
                price={building.currentPrice}
                production={`+${building.bonus * 100}%`}
                totalProduction={`+${building.bonus * building.number * 100}%`}
                crowns={crowns}
                buyBuilding={this.buyBuilding(building.name, currentBuildings, crowns)}
              />
            )
          })
        }
      </div>
    );
  }

}

export default BuildingsList;
