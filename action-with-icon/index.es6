import ActionBlock from '../action';
import Icon from './icon';
import React, { PropTypes } from 'react';

export default class ActionWithIconBlock {
  render() {
    const { icon, style, ...props } = this.props;
    const children = typeof this.props.children === 'string' ? <span>{children}</span> : this.props.children;

    return (
      <ActionBlock {...props} style={style.action}>
        {children}
        <Icon style={style.icon} icon={icon} />
      </ActionBlock>
    );
  }

  static contextTypes = {
    isActive: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.func,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.shape({
      action: activeType,
      icon: activeType
    })
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
