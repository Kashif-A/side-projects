import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateItem: 1
		};
		console.log('APP - constructor');
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		console.log('APP - render');
		return (
			<div>
				<div style={{ width: 130, height: 100, backgroundColor: '#3236a8' }}>
					<h1 style={{ color: 'white', paddingLeft: 40, paddingTop: 15 }}>App</h1>
					<button style={{ width: 130 }} onClick={this.handleClick}>
						PRESS ME
					</button>
				</div>
				<br />
				<br />
				<br />
				<div>
					<Child1 newValue={this.state.stateItem} />
				</div>
				<br />
				<br />
				<br />
				<div />
			</div>
		);
	}

	//LIFECYCLE METHODS
	UNSAFE_componentWillMount() {
		console.log('APP - UNSAFE_componentWillMount');
	}
	componentDidMount() {
		console.log('APP - componentDidMount');
	}
	UNSAFE_componentWillReceiveProps() {
		console.log('APP - UNSAFE_componentWillReceiveProps');
	}
	shouldComponentUpdate() {
		console.log('APP - shouldComponentUpdate');
		return true;
	}
	UNSAFE_componentWillUpdate() {
		console.log('APP - UNSAFE_componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('APP - componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('APP - componentWillUnmount');
	}

	handleClick() {
		this.setState({
			stateItem: this.state.stateItem + 1
		});
	}
}
