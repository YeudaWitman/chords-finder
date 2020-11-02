import React from "react";
import styled from "styled-components";
import String from "./String";

const FretLine = styled.div`
	display: flex;
	align-items: stretch;
	height: 20%;
	border-bottom: solid 3px #a5a5a5;
`;

const Fret = (props) => {
	let last = false;
	let strs = [];
	const numOfStrings = 5;
	for (let i = 0; i <= numOfStrings; i++) {
		if (i === numOfStrings) {
			last = true;
		}
		strs.push(<String key={i} lastString={last} {...props} strIndex={i} />);
	}

	return <FretLine>{strs}</FretLine>;
};

export default Fret;
