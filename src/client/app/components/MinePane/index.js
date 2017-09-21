import React from 'react';

import Building from './Building';

import styles from './styles.scss';

class MinePane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mine_pane}>
        <Building
          name='Dwarf'
          number={10}
          price={900}
          production={1.5}
        />
        <Building
          name='Mercenary'
          number={1}
          price={9000}
          production={2.7}
        />
      </div>
    );
  }
}

export default MinePane;
