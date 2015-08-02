import React, { PropTypes } from 'react';

export default class Image {
  render() {
    const { src, style } = this.props;

    const finalStyle = {
      maxWidth: '100%',
      ...style
    };

    return <img src={src} style={finalStyle} />;
  }

  static propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.object
  }
}
