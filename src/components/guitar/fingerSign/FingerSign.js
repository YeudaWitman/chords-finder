import React from 'react';
import { useSelector } from 'react-redux';
import { Finger, Bridge } from './style';

const FingerSign = ({fretIndex, strIndex}) => {

  const {chord} = useSelector(state => state);

  const fingers = [];
  for (let i = 0; i < chord.fingers[fretIndex].length; i++) {
    const currentFret = chord.fingers[fretIndex]; 
    if(currentFret[i] === strIndex) {
      fingers.push(<Finger key={i} />);
    }
    if(currentFret[0] === 'b') {
      if(strIndex === 1) {
        fingers.push(<Bridge key={i} />);
      }
    }

  }

  return fingers;

}

export default FingerSign;
