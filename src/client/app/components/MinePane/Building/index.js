import React from 'react';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class Building extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      name,
      description,
      number,
      price,
      production,
      crowns
    } = this.props;

    return (
      <div className={classnames(styles.building_container, {'green': (price <= crowns)})}>
        <div className={styles.building_left}>
          <h1>{number}</h1>
        </div>
        <div className={styles.building_center}>
          <div>{name}</div>
          <div className={classnames(styles.price, {'green': (price <= crowns)})}><FontAwesome name='shekel'/> {price}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.building_right}>
          <div>{production}</div>
        </div>
      </div>
    );
  }
}

export default Building;
