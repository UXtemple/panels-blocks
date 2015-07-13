import Radium from 'radium';
import React, { PropTypes } from 'react';

const style = {
  fontSize: 20,
  fontWeight: 700,
  marginLeft: 50,
  marginRight: 35,
  textTransform: 'uppercase'
};

@Radium
export default class Subtitle {
  render() {
    return <h2 style={[style, this.props.style]}>{this.props.children || this.props.subtitle}</h2>;
  }

  static propTypes = {
    style: PropTypes.object,
    subtitle: PropTypes.string
  }
}
