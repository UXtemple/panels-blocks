import baseStyle from './style';
import React, { Children, cloneElement, Component, PropTypes } from 'react';

export default class ActionBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  onClick(event) {
    event.preventDefault();
    this.context.navigate(this.props.href);
  }

  onMouseEnter() { this.setState({hover: true}) }
  onMouseLeave() { this.setState({hover: false}) }

  render() {
    const active = this.props.active || this.context.isActive(this.props.href);
    const hover = this.state.hover;
    let style = {...baseStyle, ...this.props.style.base};
    if (active || hover) {
      style = {...style, ...this.props.style.active};
    }

    let children;
    if (this.props.children) {
      children = typeof this.props.children === 'string' ?
        this.props.children : Children.map(this.props.children, child => cloneElement(child, {active, hover}));
    }

    return (
      <a href={this.props.href} title={this.props.title} style={style} onClick={::this.onClick}
        onMouseEnter={::this.onMouseEnter} onMouseLeave={::this.onMouseLeave}>
        {children || this.props.title}
      </a>
    );
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
    style: PropTypes.object,
    title: PropTypes.string
  }
}
