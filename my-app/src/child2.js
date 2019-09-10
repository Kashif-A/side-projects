import React, { Component } from 'react';
// import ChildOfChild from './ChildOfChild';
import './mockdata.json'

export default class Child2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateItem: 1
		};
		console.log('Child2 - constructor')
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		console.log('Child2 - render');
		return (
			<div style={{ width: 130, height: 100, backgroundColor: '#0216b8' }}>
				<h1 style={{ color: 'white', paddingLeft: 20, paddingTop: 15 }}>Child2</h1>
				<button style={{ width: 130 }} onClick={this.handleClick}>
					PRESS ME
				</button>
				{/* <ChildOfChild /> */}
			</div>
		);
	}

	// LIFECYCLE METHODS
	UNSAFE_componentWillMount() {
		console.log('Child2 - UNSAFE_componentWillMount');
	}
	componentDidMount() {
		console.log('Child2 - componentDidMount');
	}
	UNSAFE_componentWillReceiveProps() {
		console.log('Child2 - UNSAFE_componentWillReceiveProps');
	}
	shouldComponentUpdate(nextProps, nextState) {
    console.log('Child2 - shouldComponentUpdate')
    console.log(nextProps === this.props)
		console.log(nextState === this.state)
		return true
	}
	UNSAFE_componentWillUpdate() {
		console.log('Child2 - UNSAFE_componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('Child2 - componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('Child2 - componentWillUnmount');
	}

	handleClick(newValue) {
		this.setState({
			stateItem: 1
		});
	}
}
