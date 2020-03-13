import React, { useState, useEffect } from 'react'

const PlanetDetail = (props) => {
	const { selectedPlanet, setSelectedPlanet } = props

	const [planetDetails, setPlanetDetails] = useState(null)

	useEffect(() => {
		selectedPlanet &&
		setTimeout(() => {
			fetch(`http://planets/api/Planets/${selectedPlanet}`)
				.then(p => {
					p.json()
						.then(payload => setPlanetDetails(payload))
				}).catch(err => console.log(err))
		}, 2000)
	}, [selectedPlanet])

	console.log(planetDetails)

	return (
		<div className='planetDetail'>

			{renderCloseButton(setSelectedPlanet)}
			
			<div style={{ marginTop: '-10px' }}>

				{planetDetails
					? renderDetail(planetDetails)
					: <p style={{padding: '20px', backgroundColor: 'white'}}>LOADING...</p>}
				
			</div>
		</div>		
	)
}

export default PlanetDetail

const renderDetail = (planetDetails) => {
	const { name, distanceFromSun, mass, diameter, imageUrl } = planetDetails

	return (
		<div style={{textAlign: 'center'}}>

			<h2 className='planetDetailName'>{name}</h2>

			<div style={{marginLeft: '50px', float: 'left', marginTop: '35px', backgroundColor: 'red'}}>
				<img src={imageUrl} height='230' />
			</div>

			<div style={{marginLeft: '330px'}}>
				<form className='form'>
					<ul>

						<li>
							<label htmlFor='distance from sun'>Distance from Sun</label>
							<input 
								type='text' 
								name='distance from sun' 
								maxLength='100'
								value={distanceFromSun} />
						</li>

						<li>
							<label htmlFor='mass'>Mass</label>
							<input 
								type='text' 
								name='mass' 
								maxLength='100'
								value={mass} />
						</li>

						<li>
							<label htmlFor='diameter'>Diameter</label>
							<input 
								type='text' 
								name='diameter' 
								maxLength='100'
								value={diameter} />
						</li>

						<li>
							<input type='submit' value='Update' />
						</li>

					</ul>
				</form>
			</div>
		</div>
	)
}

const renderCloseButton = (setSelectedPlanet) =>
	<div style={{ paddingRight: '20px', paddingTop: '10px' }}>
		<p className='closePlanetDetail' onClick={() => setSelectedPlanet(null)}>x</p>
	</div>
	
const getWidth = (planetName) => {
	switch (planetName) {
	case 'mercury':
		return 500
	case 'venus':
		return 500
	case 'earth':
		return 500
	case 'mars':
		return 500
	case 'jupiter':
		return 500
	case 'saturn':
		return 500
	case 'uranus':
		return 500
	case 'Neptune':
		return 500
	}
}
