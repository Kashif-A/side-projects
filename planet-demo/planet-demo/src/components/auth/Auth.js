import React, { Fragment, useState } from 'react'

import './Auth.css'
import { sendAuthRequest } from '../../util/auth'

import PropTypes from 'prop-types'

const Auth = (props) =>{
	const { authenticated, setAuthenticated } = props

	Auth.propTypes = {
		authenticated: PropTypes.bool,
		setAuthenticated: PropTypes.func
	}

	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)

	return (
		<Fragment>
			<div className='stars' />
			<div className='twinkling' />
			<div className='clouds'>
				<div className='loginForm' style={{textAlign: 'center'}}>

					{authenticated === null && <p className='loginHeader'>Enter details to login...</p>}
					{authenticated === false && <p className='loginHeader'>Incorrect credentials. Please try again or contact the administrator...</p>}

					<form className='form'>

						<ul>

							<li>
								<label htmlFor='username'>Username</label>
								<input 
									type='text' 
									name='username' 
									value={username}
									placeholder={'Enter username...'}
									onChange={(e) => {
										setUsername(e.target.value)
										setAuthenticated(null)
									}} />
							</li>

							<li>
								<label htmlFor='password'>Password</label>
								<input 
									type='password' 
									name='password' 
									value={password}
									placeholder={'Enter password...'}
									onChange={(e) => {
										setPassword(e.target.value)
										setAuthenticated(null)
									}} />
							</li>

							<li>
								<input 
                  	type='submit' 
                  	value={(username || password) ? 'Login' : 'Skip Auth'}
									onClick={(e) => {
										e.preventDefault()
										if (username || password) {
											sendAuthRequest(
												username, 
												password, 
												setAuthenticated
											)
										}
										setAuthenticated(true)
									}} />
							</li>

						</ul>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default Auth
