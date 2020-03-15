import React, { Fragment, useState } from 'react'

import './Auth.css'

const Auth = (props) =>{
	const { authenticated, setAuthenticated } = props
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

					<form className='form' onSubmit={(e) => 
						sendAuthRequest(
							e, 
							username, 
							password, 
							setAuthenticated
						)}>

						<ul>

							<li>
								<label htmlFor='username'>Username</label>
								<input 
									type='text' 
									name='username' 
									value={username}
									placeholder={'Enter username...'}
									onChange={(e) => setUsername(e.target.value)} />
							</li>

							<li>
								<label htmlFor='password'>Password</label>
								<input 
									type='password' 
									name='password' 
									value={password}
									placeholder={'Enter password...'}
									onChange={(e) => setPassword(e.target.value)} />
							</li>

							<li>
								{true &&
                  <input 
                  	type='submit' 
                  	value='Login'/>}
							</li>

						</ul>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

const sendAuthRequest = (e, userName, password, setAuthenticated) =>{
	e.preventDefault()
	fetch('http://dootrixauth/api/Authentication/Login', {
		method: 'POST',
		body: JSON.stringify({
			userName,
			password 
		}),
		headers: {'Content-Type': 'application/json'}
	}).then(resp => {
		if (resp.status === 200) {
			setAuthenticated(true)
		} else {
			setAuthenticated(false)
		}
	})
}

export default Auth
