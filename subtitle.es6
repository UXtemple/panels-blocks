import React, { PropTypes } from 'react';

export default class Subtitle {
  render() {
    const { children, subtitle, style } = this.props;

    const finalStyle = {
      fontSize: 20,
      fontWeight: 700,
      marginLeft: 50,
      marginRight: 35,
      textTransform: 'uppercase',
      ...style
    };

    return <h2 style={finalStyle}>{children || subtitle}</h2>;
  }

  static propTypes = {
    style: PropTypes.object,
    subtitle: PropTypes.string
  }
}
