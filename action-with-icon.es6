import Action from './action';
import React, { PropTypes } from 'react';

const innerStyle = {
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row'
};

export default class ActionWithIcon {
  render() {
    const { children, icon: Icon, style, ...props } = this.props;

    return (
      <Action {...props} style={style.action}>
        {active => (
          <span style={[innerStyle, style.inner]}>
            {typeof children === 'function' ? children(active) : children}
            <Icon {...style.icon[active ? 'active' : 'base']} />
          </span>
        )}
      </Action>
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
      icon: activeType,
      inner: PropTypes.object
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
      },
      inner: {}
    }
  }
}

const activeType = PropTypes.shape({
  active: PropTypes.object,
  base: PropTypes.object
});
