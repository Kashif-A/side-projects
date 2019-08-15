import React, { Component } from 'react';

export default class Child1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateItem: props.newValue
		};
		console.log('Child1 - constructor');
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		console.log('Child1 - render');
		return (
			<div style={{ width: 130, height: 100, backgroundColor: '#0216b8' }}>
				<h1 style={{ color: 'white', paddingLeft: 20, paddingTop: 15 }}>Child1</h1>
				<button style={{ width: 130 }} onClick={this.handleClick}>
					PRESS ME
				</button>
			</div>
		);
	}

	//LIFECYCLE METHODS
	UNSAFE_componentWillMount() {
		console.log('Child1 - UNSAFE_componentWillMount');
	}
	componentDidMount() {
		console.log('Child1 - componentDidMount');
	}
	UNSAFE_componentWillReceiveProps() {
		console.log('Child1 - UNSAFE_componentWillReceiveProps');
	}
	shouldComponentUpdate() {
		console.log('Child1 - shouldComponentUpdate');
		return true;
	}
	UNSAFE_componentWillUpdate() {
		console.log('Child1 - UNSAFE_componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('Child1 - componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('Child1 - componentWillUnmount');
	}

	handleClick(newValue) {
		this.setState({
			stateItem: this.state.stateItem + 1
		});
	}
}
