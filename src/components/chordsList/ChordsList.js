import React from "react";
import styled from "styled-components";
import ChordGroup from "./ChordGroup";

import { chords } from "../../chords";

const Wrapper = styled.div`
	background-color: #3e443e;
	max-width: 430px;
	margin: 0.5rem auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
	border: 2px solid #3e443e;
	border-radius: 8px;
	-webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.22);
	box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.22);

	&::-webkit-scrollbar-track {
		background-color: #f5f5f5;
		border-radius: 0 0 8px 8px;
	}

	&::-webkit-scrollbar {
		background-color: #f5f5f5;
		border-radius: 0 0 8px 8px;
	}

	&::-webkit-scrollbar-thumb {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #555;
		border-radius: 0 0 8px 8px;
	}
`;

const ChordsList = () => {
	return (
		<Wrapper>
			{chords.map((chord, i) => {
				return <ChordGroup key={i} chord={chord} />;
			})}
		</Wrapper>
	);
};

export default ChordsList;
