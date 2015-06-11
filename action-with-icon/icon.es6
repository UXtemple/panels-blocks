import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  render() {
    const Component = this.props.icon;

    return <Component {...this.props.style[this.props.active ? 'active' : 'base']} />;
  }

  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.any.isRequired,
    style: PropTypes.shape({
      active: PropTypes.object,
      base: PropTypes.object
    })
  }

  static defaultProps = {
    style: {
      active: {},
      base: {}
    }
  }
}
