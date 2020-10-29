import React from 'react';
import styled from 'styled-components';
import Fret from './Fret';

const StyledGuitar = styled.table`
	margin: 0.3rem auto 0 auto;
	width: 300px;
	max-width: 300px;
	height: 450px;
	background-color: #ecf0ec;
	border-top: 10px solid #000;
	border-collapse: collapse;
`;

const Guitar = ({chord}) => {
	let rows = [];

	for (let i = 1; i < 6; i++) {
		rows.push(<Fret key={i} fretIndex={i} />);
	}

	return (
		<StyledGuitar>
			<tbody>
				{rows}
			</tbody>
		</StyledGuitar>
	)
}

export default Guitar;
