import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

class VerticalPanel extends React.Component {
  render() {
    return (
      <div className={classnames(this.props.className, styles.vertical_panel)}>
        {this.props.children}
      </div>
    );
  }
}

export default VerticalPanel;
