import React from 'react';
import styled from 'styled-components';
import ChordGroup from './ChordGroup';

import { chords } from '../../chords';

const Wrapper = styled.div`
	background-color: #3e443e;
	max-width: 430px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
	border: 2px solid #3e443e; 
	border-radius: 8px;
	-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.22);
	-moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.22);
	box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.22);
`;

const ChordsList = () => {

  return (
    <Wrapper>
			{chords.map((chord, i) => {
				return <ChordGroup key={i} chord={chord} />
			})}
    </Wrapper>
  )
}

export default ChordsList;
