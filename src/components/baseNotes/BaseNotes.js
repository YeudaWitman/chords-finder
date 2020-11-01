import React from "react";
import styled from "styled-components";

const StyledbaseNotes = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	width: 310px;
	max-width: 310px;
	border-collapse: collapse;
	text-align: center;
	font-size: 1.4rem;
	font-weight: 700;
`;

const chartsList = ["E", "A", "D", "G", "B", "E"];

const BaseNotes = ({ base }) => {
	const charts = chartsList.map((c, i) => {
		let char = " ";
		if (base === i) {
			char = "o";
		}
		return <span key={i}>{char}</span>;
	});

	return <StyledbaseNotes>{charts}</StyledbaseNotes>;
};

export default BaseNotes;
