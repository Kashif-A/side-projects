import React, { Fragment, useState } from 'react'

import './App.css'

import Planet from './components/Planet'
import Sun from './components/Sun'
import Controls from './components/Controls'

function App() {
	const [selectedPlanet, setSelectedPlanet] = useState(null)
	console.log(selectedPlanet)
	return (
		<Fragment>
			<Controls setSelectedPlanet={setSelectedPlanet} />
			{renderUniverse()}
		</Fragment>
	)
}

export default App

const renderUniverse = () =>
	<div id='universe' className='scale-stretched'>
		<div id='galaxy'>
			<div id='solar-system' className='earth'>
				<Planet planet={'mercury'} />
				<Planet planet={'venus'} />
				<Planet planet={'earth'} />
				<Planet planet={'mars'} />
				<Planet planet={'jupiter'} />
				<Planet planet={'saturn'} />
				<Planet planet={'uranus'} />
				<Planet planet={'neptune'} />

				<Sun />

			</div>
		</div>
	</div>
