import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './js/Components/Layout';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Movies from './js/Components/search/Movies'
import Characters from './js/Components/search/Characters'


ReactDOM.render(
  <Router>
	<Route path="/" component={Layout}>
		<Route path="/movie-list" component={Movies}></Route>
		<Route path="/character-list" component={Characters}></Route>
	</Route>
  </Router>,
  document.getElementById('root')
);
