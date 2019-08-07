import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            registerHTML: ''
        }
    }

    componentDidMount() {
        fetch("http://localhost:55014/account/register").then((response) => {
            let a = 'b'
            response.text().then((registerHTML) => {
                this.setState({
                    registerHTML
                })
            })
        });
    }
    render() {
        return (
            this.state.registerHTML
        )
    }
}