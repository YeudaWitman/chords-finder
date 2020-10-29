import React from 'react';
import styled from 'styled-components';

import ChordItem from './ChordItem';

const ChordGroupStyled = styled.span`
	flex: 0 0 auto;
	display: flex;
	width: 80px;
	height: 100px;
	margin: .5rem;
	padding: .2rem;
	border: 3px solid #565;
	border-radius: 8px;
	background-color: #cbdacb;
	background: linear-gradient(145deg, #b7c4b7, #d9e9d9);
	font-weight: 700;
	align-content: center;
	justify-content: space-between;
	flex-direction: column;
	flex-wrap: nowrap;
	overflow-x: hidden;
	overflow-y: auto;

	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
	}

	&::-webkit-scrollbar
	{
			width: 3px;
			background-color: #F5F5F5;
	}

	&::-webkit-scrollbar-thumb
	{
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			background-color: #555;
	}
`;

const ChordGroup = ({chord}) => {
  return (
    <ChordGroupStyled>
			{chord.chords.map((item, i) => <ChordItem key={i} chord={item} />)}
    </ChordGroupStyled>
  )
}

export default ChordGroup;
