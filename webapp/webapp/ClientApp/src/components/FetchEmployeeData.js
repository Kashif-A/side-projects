import React, { Component } from 'react'
import { RenderEmployeeData } from './RenderEmployeeData'

export class FetchEmployeeData extends Component {
    displayName = FetchEmployeeData.name

    constructor(props) {
        super(props);
        this.state = { data: null, loading: true }

        fetch('api/employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ data, loading: false })
            });
    }

    render() {
        const { data, loading} = this.state
        let contents = loading && data
            ? <p><em>Loading...</em></p>
            : data && data.map(item => RenderEmployeeData(item))
        return (
            <div>
                <h1>Employee Data</h1>
                <p>This component demonstrates fetching data from the server and optimizing the view.</p>
                {contents}
            </div>
        );
    }
}
