import baseStyle from './style';
import React, { Component, PropTypes } from 'react';

export default class SubtitleBlock extends Component {
  render() {
    return <h2 style={{...baseStyle, ...this.props.style}}>{this.props.children || this.props.subtitle}</h2>;
  }
}

SubtitleBlock.propTypes = {
  style: PropTypes.object,
  subtitle: PropTypes.string
}
