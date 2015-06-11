import ActionBlock from '../action';
import Icon from './icon';
import React, { Component, PropTypes } from 'react';

export default class ActionWithIconBlock extends Component {
  render() {
    const { icon, style, ...props } = this.props;

    return (
      <ActionBlock {...props} style={style.action}>
        {this.props.children}
        <Icon style={style.icon} icon={icon} />
      </ActionBlock>
    );
  }

  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.element,
    href: PropTypes.string.isRequired,
    panels: PropTypes.object,
    style: PropTypes.shape({
      action: activeType,
      icon: activeType
    }),
    title: PropTypes.string
  }

  static defaultProps = {
    style: {
      action: {
        active: {},
        base: {}
      },
      icon: {
        active: {},
        base: {}
      }
    }
  }
}

const activeType = PropTypes.shape({
  active: PropTypes.object,
  base: PropTypes.object
});
