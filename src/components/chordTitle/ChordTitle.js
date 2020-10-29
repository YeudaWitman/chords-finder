import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
  height: 37px;
	font-size: 2rem;
	font-weight: 900;
	text-align: center;
	margin: .6rem auto;
	letter-spacing: .2rem;
`;

const ChordTitle = ({chord}) => {
  return (
    <Title>
      {chord.name}
    </Title>
  )
}

export default ChordTitle;