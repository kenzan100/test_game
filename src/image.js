import React from 'react';

export function Image(props) {
  const { mode, height, src, style, ...attrs } = props;
  const modes = {
    'fill': 'cover',
    'fit':  'contain'
  };
  const size = modes[mode] || 'cover';
  const important = {
    height: height,
    backgroundImage: `url("${src}")`,
    backgroundSize:  size,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  };
  return(
    <div {...attrs} style={{...style, ...important}} />
  );
}
