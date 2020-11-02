import React from "react";
import styled from "styled-components";
import Fret from "./Fret";

const StyledGuitar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: stretch;
	align-content: stretch; */
	margin: 0.3rem auto 0 auto;
	width: 300px;
	max-width: 300px;
	height: 450px;
	background-color: #ecf0ec;
	border-top: 10px solid #000;
`;

const Guitar = ({ chord }) => {
	let rows = [];

	for (let i = 0; i < 5; i++) {
		rows.push(<Fret key={i} fretIndex={i} />);
	}

	return <StyledGuitar>{rows}</StyledGuitar>;
};

export default Guitar;
