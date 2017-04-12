 /**
 * Created by victorasante-kyei on 10/04/2017.
 */
import React from "react";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {welcome: "Welcome to Star Wars Trivia!"};
	}


	render () {
		return (
			<div>
				<h1>{this.state.welcome}</h1>
			</div>
		);
	}
}

//Note react routing and react history installed with npm install --save react-router and npm install --save history respectively