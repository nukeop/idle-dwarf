import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTabs(tabs, activeIndex) {
    return tabs.map((tab, i) => {
      return (
        <div className={
          classnames(
            styles.tab,
            {[`${styles.active}`]: i === activeIndex  }
          )
        }>
          {tab}
        </div>
      );
    });
  }

  render() {
    let {
      activeIndex,
      tabs,
      panes
    } = this.props;

    return (
      <div className={styles.tabs_container}>
        <div className={styles.tabs}>
          {this.renderTabs(tabs, activeIndex)}
        </div>

        <div className={styles.pane}>

        </div>
      </div>
    );
  }
}

export default Tabs;
