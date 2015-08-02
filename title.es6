import React, { PropTypes } from 'react';

export default class Title {
  render() {
    const { children, style, title } = this.props;

    const finalStyle = {
      fontWeight: 200,
      marginLeft: 50,
      marginRight: 35,
      ...style
    };

    return <h1 style={finalStyle}>{children || title}</h1>;
  }

  static propTypes = {
    style: PropTypes.object,
    subtitle: PropTypes.string
  }
}
