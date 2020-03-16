export const sendAuthRequest = (userName, password, setAuthenticated) =>{
	fetch('http://dootrixchallengeauth-dev.eu-west-2.elasticbeanstalk.com/api/Authentication/Login', {
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

export const logout = (setAuthenticated) =>{
	fetch('http://dootrixchallengeauth-dev.eu-west-2.elasticbeanstalk.com/api/Authentication/Logout')
		.catch(() => setAuthenticated(null))
	setAuthenticated(null)
}
