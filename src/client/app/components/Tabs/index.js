import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  onTabClicked(index, fun) {
    return () => {
      if (fun) {
        fun(index);
      }
    };
  }

  renderTabs(tabs, activeIndex, onTabClicked) {
    return tabs.map((tab, i) => {
      return (
        <div className={
            classnames(
              styles.tab,
              {[`${styles.active}`]: i === activeIndex  }
            )
          }
          onClick={this.onTabClicked(i, onTabClicked)}
          key={i}
        >
          {tab}
        </div>
      );
    });
  }

  render() {
    let {
      activeIndex,
      tabs,
      panes,
      onTabClicked
    } = this.props;

    return (
      <div className={styles.tabs_container}>
        <div className={styles.tabs}>
          {this.renderTabs(tabs, activeIndex, onTabClicked)}
        </div>

        <div className={styles.pane}>

        </div>
      </div>
    );
  }
}

export default Tabs;
