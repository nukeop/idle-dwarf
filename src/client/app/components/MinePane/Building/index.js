import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class Building extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      name,
      number,
      price,
      production
    } = this.props;

    return (
      <div className={styles.building_container}>
        <div className={styles.building_left}>
          <h1>{number}</h1>
        </div>
        <div className={styles.building_center}>
          <div>{name}</div>
          <div><FontAwesome name='shekel'/> {price}</div>
        </div>
        <div className={styles.building_right}>
          <div>{production}/s</div>
        </div>
      </div>
    );
  }
}

export default Building;
