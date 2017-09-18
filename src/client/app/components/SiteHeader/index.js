import React from 'react';

import styles from './styles.scss';

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.site_header}>
        <div className={styles.header_item}><h2>Idle Dwarf</h2></div>
        <div className={styles.header_item}><h2>v. 1.0.0</h2></div>
      </div>
    );
  }
}

export default SiteHeader;
