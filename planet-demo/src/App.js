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
				setSelectedPlanet,
				setAuthenticated) 

			: <Auth 
				authenticated={authenticated}
				setAuthenticated={setAuthenticated} />
	)
}

export default App

const renderMainApp = (selectedPlanet, setSelectedPlanet, setAuthenticated) =>
	<Fragment>
		<Controls 
			setSelectedPlanet={setSelectedPlanet}
			setAuthenticated={setAuthenticated} />

		<Universe />

		{selectedPlanet &&
			<PlanetDetails
				selectedPlanet={selectedPlanet}
				setSelectedPlanet={setSelectedPlanet} />}
	</Fragment>
