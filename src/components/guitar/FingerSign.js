import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Finger = styled.div`
	height: 40px;
	width: 40px;
	background-color: #000;
	border-radius: 20px;
	margin: -21px;
	color: #fff;
	text-align: center;
	padding: .1rem;
	font-size: 1.2rem;
`;

const Bridge = styled.div`
  position: absolute;
  top: 22px;
  left: -23px;
  background-color: #000;
  border-radius: 20px;
  height: 40px;
  width: 339px;
`;

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
