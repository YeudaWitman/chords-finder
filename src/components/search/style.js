import styled from "styled-components";

export const SearchBox = styled.input.attrs({
	type: "text",
	placeholder: "Search chord...",
})`
	margin: 0 auto;
	width: 250px;
	max-width: 250px;
	display: flex;
	justify-content: center;
	align-content: center;
	text-align: center;
	border: 1px solid #565;
	border-radius: 8px;
	background-color: #cbdacb;
	font-size: 1.5rem;
	padding: 0.5rem 1rem;

	&:focus {
		background-color: #ecf0ec;
	}
`;
