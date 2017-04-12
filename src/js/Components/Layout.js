 /**
 * Created by victorasante-kyei on 10/04/2017.
 */
import React from "react";

import Movies from "./search/Movies";
import SearchResult from "./search/Characters"

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {welcome: "Welcome to Star Wars Trivia!"};
		this.state= {shoutout: "No Shoutouts"};
	}

	createNewShoutOut(shoutout){
		this.setState({shoutout});
	}

	render () {
		const searchQuestion = "Have you finished your search?";
		const ResultQuestion = "Are you pleased with your results";
		return (
			<div>
				<h1>{this.state.welcome}</h1>
				<h4>Newest Shoutout: {this.state.shoutout}!!</h4>
				<Movies shoutout={this.state.shoutout}  createNewShoutOut={this.createNewShoutOut.bind(this)} question={searchQuestion}/>
				<SearchResult question={ResultQuestion}/>
			</div>
		);
	}
}