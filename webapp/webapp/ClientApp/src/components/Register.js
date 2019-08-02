import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            registerHTML: ''
        }
    }

    componentDidMount() {
        fetch("https://localhost:5001/account/register").then((response) => {
            this.setState({
                registerHTML: response.text()
            })
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.registerHTML}</h1>
            </div>
        )
    }
}