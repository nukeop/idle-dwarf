import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

class Statistic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={classnames(
        styles.statistic,
        {[`${styles.small}`]: this.props.small},
        {[`${styles.flexible}`]: this.props.flexible}
      )}>
        {
          this.props.inverted
          ? <div className={styles.label}>
              {this.props.label}
            </div>
          : <div className={styles.value}>
              {this.props.value}
            </div>
        }
        {
          this.props.inverted
          ? <div className={styles.value}>
              {this.props.value}
            </div>
          : <div className={styles.label}>
              {this.props.label}
            </div>
        }


      </div>
    );


  }
}

export default Statistic;
