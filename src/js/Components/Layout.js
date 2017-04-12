/**
 * Created by victorasante-kyei on 10/04/2017.
 */
import React from "react";

import Search from "./search/Search";
import SearchResult from "./search/SearchResult"

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {welcome: "Welcome to Star Wars Trivia!"};
	}
	render () {
		const searchQuestion = "Have you finished your search?";
		const ResultQuestion = "Are you pleased with your results";
		return (
			<div>
				<h1>{this.state.welcome}</h1>
				<Search question = {searchQuestion}/>
				<SearchResult question = {ResultQuestion}/>
			</div>
		)
	}
}