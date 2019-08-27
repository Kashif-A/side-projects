import React, { Component } from 'react';

export default class ChildOfChild extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateItem: 1
		};
		console.log('ChildOfChild - constructor');
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		console.log('ChildOfChild - render');
		return (
			<div style={{ width: 130, height: 100, backgroundColor: '#0216b8' }}>
				<h1 style={{ color: 'white', paddingLeft: 20, paddingTop: 15 }}>ChildOfChild</h1>
				<button style={{ width: 130 }} onClick={this.handleClick}>
					PRESS ME
				</button>
			</div>
		);
	}

	//LIFECYCLE METHODS
	// UNSAFE_componentWillMount() {
	// 	console.log('ChildOfChild - UNSAFE_componentWillMount');
	// }
	// componentDidMount() {
	// 	console.log('ChildOfChild - componentDidMount');
	// }
	// UNSAFE_componentWillReceiveProps() {
	// 	console.log('ChildOfChild - UNSAFE_componentWillReceiveProps');
	// }
	// shouldComponentUpdate(nextProps, prevState) {
	// 	console.log('ChildOfChild - shouldComponentUpdate')
	// 	return  true
	// }
	// UNSAFE_componentWillUpdate() {
	// 	console.log('ChildOfChild - UNSAFE_componentWillUpdate');
	// }
	// componentDidUpdate() {
	// 	console.log('ChildOfChild - componentDidUpdate');
	// }
	// componentWillUnmount() {
	// 	console.log('ChildOfChild - componentWillUnmount');
	// }

	handleClick(newValue) {
		this.setState({
			stateItem: 1
		});
	}
}
