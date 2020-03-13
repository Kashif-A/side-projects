import React, { Fragment, useState } from 'react'

import './App.css'
import Controls from './components/Controls'
import Universe from './components/Universe'
import PlanetDetail from './components/PlanetDetail'

function App() {
	const [selectedPlanet, setSelectedPlanet] = useState(null)
	console.log(selectedPlanet)
	return (
		<Fragment>
			
			<Controls setSelectedPlanet={setSelectedPlanet} />
			
			<Universe />

			{selectedPlanet && 
				<PlanetDetail 
					selectedPlanet={selectedPlanet} 
					setSelectedPlanet={setSelectedPlanet} />}

		</Fragment>
	)
}

export default App
