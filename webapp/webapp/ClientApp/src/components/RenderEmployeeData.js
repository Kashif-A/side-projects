import React from 'react'

export function RenderEmployeeData(data) {
    return (
        <React.Fragment>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                    </tr>
                    )}
                        </tbody>
            </table>
        </React.Fragment>
        )
}