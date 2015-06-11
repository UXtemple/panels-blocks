import baseStyle from './style';
import React, { Component, PropTypes } from 'react';

export default class TitleBlock extends Component {
  render() {
    return <h1 style={{...baseStyle, ...this.props.style}}>{this.props.children || this.props.title}</h1>;
  }
}

TitleBlock.propTypes = {
  style: PropTypes.object,
  subtitle: PropTypes.string
}
