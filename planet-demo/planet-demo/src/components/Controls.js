import React, {Fragment} from 'react'
import { logout } from '../util/auth'

import PropTypes from 'prop-types'

const Controls = (props) =>{
	const { setAuthenticated, setSelectedPlanet } = props

	Controls.propTypes = {
		setAuthenticated: PropTypes.func,
		setSelectedPlanet: PropTypes.func
	}
	return (
		<Fragment>
			<p className='logout' onClick={() => logout(setAuthenticated)}>Logout</p>
			<div id='data'>
				{renderPlanetControls(setSelectedPlanet)}
			</div>
		</Fragment>)

}

export default Controls

const renderPlanetControls = (setSelectedPlanet) => 
	<>
		<a className='mercury' title='mercury' href='#mercuryspeed' onClick={() => setSelectedPlanet('Mercury')}>Mercury</a>
		<a className='venus' title='venus' href='#venusspeed' onClick={() => setSelectedPlanet('Venus')}>Venus</a>
		<a className='earth' title='earth' href='#earthspeed' onClick={() => setSelectedPlanet('Earth')}>Earth</a>
		<a className='mars' title='mars' href='#marsspeed' onClick={() => setSelectedPlanet('Mars')}>Mars</a>
		<a className='jupiter' title='jupiter' href='#jupiterspeed' onClick={() => setSelectedPlanet('Jupiter')}>Jupiter</a>
		<a className='saturn' title='saturn' href='#saturnspeed' onClick={() => setSelectedPlanet('Saturn')}>Saturn</a>
		<a className='uranus' title='uranus' href='#uranusspeed' onClick={() => setSelectedPlanet('Uranus')}>Uranus</a>
		<a className='neptune' title='neptune' href='#neptunespeed' onClick={() => setSelectedPlanet('Neptune')}>Neptune</a>
	</>
