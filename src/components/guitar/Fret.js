import React from 'react';
import String from './String';

const Fret = ({fretIndex}) => {

  let strs = [];
	for (let i = 1; i < 6; i++) {
    strs.push(<String key={i} fretIndex={fretIndex} strIndex={i} />);
  }
  
  return (
    <tr>
      {strs}
    </tr>
  )
}

export default Fret;
