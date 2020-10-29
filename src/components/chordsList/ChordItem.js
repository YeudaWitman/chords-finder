import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../redux/actions';

const StyleChordItem = styled.span`
  background-color: #b7c4b7;
	background: linear-gradient(42deg, #d9e9d9, #b7c4b7);
	margin: .2rem;
	padding: .2rem;
	border: 2px solid #565;
  border-radius: 8px;
  cursor: pointer;
`;

const ChordItem = ({chord}) => {

  const dispatch = useDispatch();
  
  const handleSelected = () => {
    dispatch(actions.selectChord(chord));
  }

  return (
    <StyleChordItem onClick={handleSelected}>
      {chord.name}
    </StyleChordItem>
  )
}

export default ChordItem;
