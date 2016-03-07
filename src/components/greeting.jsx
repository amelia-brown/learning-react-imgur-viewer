import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './greeting-styles';

@CSSModules(styles)

export default class Greeting extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <div className={styles.classbase}
        styleName='base'>
        <p>
          Hello, {this.props.name}
        </p>
      </div>
    );
  }
}
