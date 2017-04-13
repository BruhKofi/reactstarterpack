import React from 'react';
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from "react-router";

import Layout from "../src/js/Components/Layout";

const app = document.getElementById('app')


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}></Route>
	</Router>,
 app);
