import React, { Fragment, useState } from 'react'

import './App.css'
import Controls from './components/Controls'
import Universe from './components/Universe'
import PlanetDetails from './components/PlanetDetails'

function App() {
	const [selectedPlanet, setSelectedPlanet] = useState(null)
	console.log(selectedPlanet)
	return (
		<Fragment>
			
			<Controls setSelectedPlanet={setSelectedPlanet} />
			
			<Universe />

			{selectedPlanet && 
				<PlanetDetails 
					selectedPlanet={selectedPlanet} 
					setSelectedPlanet={setSelectedPlanet} />}

		</Fragment>
	)
}

export default App
