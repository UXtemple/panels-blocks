import baseStyle from './style';
import React, { Component, PropTypes } from 'react';

export default class ImageTitle extends Component {
  render() {
    return <img src={this.props.src} style={{...baseStyle, ...this.props.style}} />;
  }
}

ImageTitle.propTypes = {
  src: PropTypes.string.isRequired,
  style:  PropTypes.object
}
