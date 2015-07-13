import Radium from 'radium';
import React, { PropTypes } from 'react';

const style = {
  fontSize: 16,
  lineHeight: 1.65,
  marginLeft: 50,
  marginRight: 35
}

@Radium
export default class TextBlock {
  render() {
    return <p style={[style, this.props.style]}>{this.props.children || this.props.text}</p>;
  }

  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
  }
}
