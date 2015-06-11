import baseStyle from './style';
import React, { Component, PropTypes } from 'react';

export default class TextBlock extends Component {
  render() {
    return <p style={{...baseStyle, ...this.props.style}}>{this.props.children || this.props.text}</p>;
  }
}

TextBlock.propTypes = {
  text: PropTypes.string,
  style:  PropTypes.object
}
