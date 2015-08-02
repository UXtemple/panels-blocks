import React, { PropTypes } from 'react';

export default class TextBlock {
  render() {
    const { children, text, style } = this.props;

    const finalStyle = {
      fontSize: 16,
      lineHeight: 1.65,
      marginLeft: 50,
      marginRight: 35,
      ...style
    };

    return <p style={finalStyle}>{children || text}</p>;
  }

  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object
  }
}
