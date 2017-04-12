/**
 * Created by victorasante-kyei on 10/04/2017.
 */

import React from "react";

export default class SearchResult extends React.Component {
	render() {
		return (
			<div>
			<h2>Your search Result</h2>
			<h4>{this.props.question}</h4>
			</div>
		);
	}
}