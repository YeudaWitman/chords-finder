import React from "react";
import { SearchBox } from "./style";

const Search = () => {
	const onSearch = (e) => {
		console.log(e.target.value);
	};

	return <SearchBox onChange={onSearch} />;
};

export default Search;
