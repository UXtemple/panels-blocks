import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const style = {
  maxWidth: '100%'
};

@Radium
export default class Image extends Component {
  render() {
    return <img src={this.props.src} style={[style, this.props.style]} />;
  }

  static propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.object
  }
}
