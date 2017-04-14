/**
 * Created by victorasante-kyei on 10/04/2017.
 */

import React from "react";

export default class Movies extends React.Component {
	createShoutOut(e){
		const shoutOut = e.target.value;
		this.props.createNewShoutOut(shoutOut);
	}
	render() {
		return (
			<div>
			<h2>Movies List</h2>
			<h4>{this.props.question}</h4>
				<h4>Current Shoutout - {this.props.shoutout}!!!!;</h4>
				<input onChange={this.createShoutOut.bind(this)}/>
			</div>
		);
	}
}