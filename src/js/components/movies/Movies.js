/**
 * Created by victorasante-kyei on 10/04/2017.
 */

import React from "react";
import Movie from "../../components/movie/Movie";
import MoviesStore from "../../stores/MoviesStore";

const moviesStore = new MoviesStore();

export default class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: MoviesStore.getMovies()
		};
	}

	createShoutOut(e){
		const shoutOut = e.target.value;
		this.props.createNewShoutOut(shoutOut);
	}
	render() {
		const { movies } = this.state;
		const {movieList } = movies.map((movie) => {
			return <Movie key={movie.episode_id} {...movie}/>
		});

		return (
			<div>
			<h2>Movies List</h2>
			<ul>{movieList}</ul>
			<h4>{this.props.question}</h4>
				<h4>Current Shoutout - {this.props.shoutout}!!!!;</h4>
				<input onChange={this.createShoutOut.bind(this)}/>
			</div>
		);
	}
}