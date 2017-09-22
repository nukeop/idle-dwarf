import React from 'react';

import Building from '../Building';

import styles from './styles.scss';

class BuildingsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      buildings,
      crowns
    } = this.props;

    return (
      <div className={styles.buildings_list}>
        {
          buildings.map(building => {
            return (
              <Building
                name={building.name}
                description={building.description}
                number={0}
                price={building.initialPrice}
                production={`+${building.bonus * 100}%`}
                crowns={crowns}
              />
            )
          })
        }
      </div>
    );
  }

}

export default BuildingsList;
