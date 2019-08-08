import React, { PureComponent } from 'react'

export class Register extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            registerHTML: ''
        }
    }

    render() {
        return (
            <div>
                <form method="POST" action="">
                    <fieldset>
                        <label for="username"><b>Username</b></label>
                        <input
                            type="text"
                            placeholder="Enter username..."
                            name="username"
                            required />
                        <label for="password"><b>Username</b></label>
                        <input
                            type="password"
                            placeholder="Enter password..."
                            name="password"
                            required />
                        <button type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}