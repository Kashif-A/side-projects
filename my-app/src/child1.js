import React, { Component } from 'react';
import {ChildOfChildFunc} from './ChildOfChildFunc';

export default class Child1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateItem: 1
		};
		console.log('Child1 - constructor')
		this.handleClick = this.handleClick.bind(this)
	}

	render() {
		console.log('Child1 - render');
		return (
			<div id='child1'>
				<div style={{ width: 130, height: 100, backgroundColor: '#0216b8' }}>
					<h4 style={{ color: 'white', paddingLeft: 20, paddingTop: 15 }}>Child1</h4>
					<button style={{ width: 130 }} onClick={this.handleClick}>
						PRESS ME
					</button>
					<br /><br /><br /><br />
					{/* <ChildOfChildFunc p={this.state.stateItem} /> */}
				</div>
			</div>
		);
	}

	// LIFECYCLE METHODS
	UNSAFE_componentWillMount() {
		console.log('Child1 - UNSAFE_componentWillMount');
	}
	componentDidMount() {
		console.log('Child1 - componentDidMount');
	}
	UNSAFE_componentWillReceiveProps() {
		console.log('Child1 - UNSAFE_componentWillReceiveProps');
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('Child1 - shouldComponentUpdate')
	// 	console.log(this.props)
	// 	console.log(nextProps)
	// 	console.log(this.state)
	// 	console.log(nextState)
	// 	console.log('nextProps === this.props : ' + nextProps === this.props)
	// 	console.log('nextState === this.state ' + nextState === this.state)
	// }
	UNSAFE_componentWillUpdate() {
		console.log('Child1 - UNSAFE_componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('Child1 - componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('Child1 - componentWillUnmount');
	}

	handleClick() {
		this.setState({
			stateItem: this.state.stateItem + 1
		});
	}
}
