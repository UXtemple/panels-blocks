import baseStyle from './style';
import React, { Children, cloneElement, Component, PropTypes } from 'react';

export default class ActionBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  onClick(event) {
    if (this.props.panels && this.props.panels.navigate) {
      event.preventDefault();
      this.props.panels.navigate(this.props.href);
    }
  }

  onMouseEnter(event) { this.setState({hover: true}) }
  onMouseLeave(event) { this.setState({hover: false}) }

  render() {
    const active = this.props.active || (this.props.panels && this.props.panels.nextUri() === this.props.href);
    const hover = this.state.hover;
    let style = {...baseStyle, ...this.props.style.base};
    if (active || hover) {
      style = {...style, ...this.props.style.active};
    }

    let children;
    if (this.props.children) {
      children = Children.map(this.props.children, child => cloneElement(child, {active, hover}));
    }

    return (
      <a href={this.props.href} title={this.props.title} style={style} onClick={::this.onClick}
        onMouseEnter={::this.onMouseEnter} onMouseLeave={::this.onMouseLeave}>
        {children || this.props.title}
      </a>
    );
  }

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    panels: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    active: false,
    style: {
      base: {},
      active: {}
    }
  }
}
