import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

function App() {
	const HatsPage = () => {
		return (
			<div>
				<h1>Hats Page</h1>
			</div>
		);
	};
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route path="/hats" component={HatsPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
