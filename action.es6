import Radium from 'radium';
import React, { Children, cloneElement, Component, PropTypes } from 'react';

@Radium
export default class Action extends Component {
  onClick(event) {
    event.preventDefault();
    this.context.navigate(this.props.href);

    if (typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }

  render() {
    const { active, href, title } = this.props;
    const isActive = active || this.context.isActive(href);

    const style = [{
      flexDirection: 'row',
      textDecoration: 'none',
      ':hover': this.props.style.active
    }, this.props.style.base, isActive && this.props.style.active];

    let children;
    if (this.props.children) {
      children = typeof this.props.children === 'function' ? this.props.children(isActive) : this.props.children;
    }

    return <a href={href} title={title} style={style} onClick={::this.onClick}>{children || title}</a>;
  }

  static contextTypes = {
    isActive: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }

  static defaultProps = {
    active: false,
    style: {
      base: {},
      active: {}
    }
  }

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string
  }
}
