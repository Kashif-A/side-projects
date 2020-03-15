import React, { useState, useEffect } from 'react'

const PlanetDetails = (props) => {
	const { selectedPlanet, setSelectedPlanet } = props

	const [planetDetails, setPlanetDetails] = useState(null)
	const [enableUpdate, setEnableUpdate] = useState(false)

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
		<div className='planetDetails'>

			{renderCloseButton(setSelectedPlanet)}
			
			<div style={{ marginTop: '-10px' }}>

				{planetDetails
					? renderDetail(planetDetails, setPlanetDetails, enableUpdate, setEnableUpdate)
					: <p style={{padding: '20px', backgroundColor: 'white'}}>LOADING...</p>}
				
			</div>
		</div>		
	)
}

export default PlanetDetails

const renderDetail = (planetDetails, setPlanetDetails, enableUpdate, setEnableUpdate) => {
	const { name, distanceFromSun, mass, diameter, imageUrl } = planetDetails

	return (
		<div style={{textAlign: 'center'}}>

			<h2 className='planetDetailName'>{name}</h2>

			<div>
				<img src={imageUrl} height='170' style={{textAlign: 'right'}} />
			</div>

			<div>
				<p style={{paddingTop: '20px', color: '#fff', fontSize: '15px'}}>Please change any of the following details to enable update functionality...</p>
				<form className='form'>
					<ul>

						<li>
							<label htmlFor='distance from sun'>Distance from Sun (KM)</label>
							<input 
								type='number' 
								name='distance from sun' 
								maxLength='100'
								value={distanceFromSun}
								onChange={(e) => {
									const distanceFromSun = parseInt(e.target.value)
									setPlanetDetails({ ...planetDetails, distanceFromSun })
									setEnableUpdate(true)
								}} />
						</li>

						<li>
							<label htmlFor='mass'>Mass (KG)</label>
							<input 
								type='text' 
								name='mass' 
								maxLength='100'
								value={mass}
								onChange={(e) => {
									const mass = e.target.value
									setPlanetDetails({ ...planetDetails, mass })
									setEnableUpdate(true)
								}} />
						</li>

						<li>
							<label htmlFor='diameter'>Diameter (KM)</label>
							<input 
								type='number' 
								name='diameter' 
								maxLength='100'
								value={diameter}
								onChange={(e) => {
									const diameter = parseInt(e.target.value)
									setPlanetDetails({ ...planetDetails, diameter })
									setEnableUpdate(true)
								}} />
						</li>

						<li>
							{true &&
								<input 
									type='submit' 
									value='Update'
									style={enableUpdate ? {backgroundColor: 'grey'} : {}} />}
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
