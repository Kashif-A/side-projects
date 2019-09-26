import React from 'react'

export const ChildOfChildFunc = React.memo(function(props) {
	console.log('ChildOfChildFunc() - ', props)
	return  (
		<div style={{ width: 130, height: 140, backgroundColor: '#0216b8' }}>
			<h5 style={{ color: 'white', paddingLeft: 12, paddingTop: 15 }}>ChildOfChildFunc</h5>
			<h5 style={{ color: 'white', paddingLeft: 12, paddingTop: 15 }}>{props.p}</h5>
			<button style={{ width: 130 }}>
				PRESS ME
			</button>
		</div>
	)
})
