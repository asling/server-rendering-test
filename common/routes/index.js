import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home';
import Atest from '../components/a';

export default class Routing extends Component{
	render(){
		return (
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/a" component={Atest} />
			</div>
		)
	}
}

