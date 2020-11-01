import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Guitar from "./components/guitar/Guitar";
import ChordsList from "./components/chordsList/ChordsList";
import ChordTitle from "./components/chordTitle/ChordTitle";
import Charts from "./components/charts/Charts";
import BaseNotes from "./components/baseNotes/BaseNotes";
import Search from "./components/search/Search";

const Container = styled.div`
	position: relative;
	max-width: 500px;
	margin: 0 auto;
	padding: 1rem 2rem;
	border: 2px solid #000;
`;

const App = () => {
	const { chord } = useSelector((state) => state);
	// console.log(chord);
	return (
		<Container>
			<Search />
			<ChordsList />
			<ChordTitle chord={chord} />
			<Charts />
			<BaseNotes base={chord.base} />
			<Guitar chord={chord} />
		</Container>
	);
};

export default App;
