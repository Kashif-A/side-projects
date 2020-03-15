import React, { Fragment, useState } from 'react'

import './App.css'
import Controls from './components/Controls'
import Universe from './components/Universe'
import PlanetDetails from './components/PlanetDetails'
import Auth from './components/auth/Auth'

function App() {
	const [selectedPlanet, setSelectedPlanet] = useState(null)
	const [authenticated, setAuthenticated] = useState(null)

	return (
		authenticated 

			? renderMainApp(
				selectedPlanet, 
				setSelectedPlanet) 

			: <Auth 
				authenticated={authenticated}
				setAuthenticated={setAuthenticated} />
	)
}

export default App

const renderMainApp = (selectedPlanet, setSelectedPlanet) =>
	<Fragment>
		<Controls setSelectedPlanet={selectedPlanet} />

		<Universe />

		{selectedPlanet &&
			<PlanetDetails
				selectedPlanet={selectedPlanet}
				setSelectedPlanet={setSelectedPlanet} />}
	</Fragment>
