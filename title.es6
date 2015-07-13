import Radium from 'radium';
import React, { PropTypes } from 'react';

const style = {
  fontWeight: 200,
  marginLeft: 50,
  marginRight: 35
};

@Radium
export default class Title {
  render() {
    return <h1 style={[style, this.props.style]}>{this.props.children || this.props.title}</h1>;
  }

  static propTypes = {
    style: PropTypes.object,
    subtitle: PropTypes.string
  }
}
