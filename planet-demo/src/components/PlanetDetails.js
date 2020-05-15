import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { mockData } from '../mockData/mockData'

const PlanetDetails = (props) => {
	const { selectedPlanet, setSelectedPlanet } = props

	PlanetDetails.propTypes = {
		selectedPlanet: PropTypes.string,
		setSelectedPlanet: PropTypes.func
	}

	const [planetDetails, setPlanetDetails] = useState(null)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		setPlanetDetails(null)
		selectedPlanet &&
		setTimeout(() => {
			fetch(`http://planets-dev.eu-west-2.elasticbeanstalk.com/api/Planets/${selectedPlanet}`)
				.then(p => {
					p.json()
						.then(() => {})
				}).catch(err => setError(err.message))
			setPlanetDetails(mockData)
		}, 2000)
	}, [selectedPlanet])

	return (
		<div className='planetDetails'>

			{renderCloseButton(setSelectedPlanet)}
			
			<div style={{ marginTop: '-10px' }}>

				{planetDetails
					? renderDetail(planetDetails, setPlanetDetails, setSelectedPlanet, success, setSuccess, setError)
					: error
						? <p className='error'>{error}</p>
						: <p className='loading'>LOADING RESULTS...</p>}
				
			</div>
		</div>		
	)
}

export default PlanetDetails

const renderDetail = (planetDetails, setPlanetDetails, setSelectedPlanet, success, setSuccess, setError) => {
	const { name, distanceFromSun, mass, diameter, imageUrl } = planetDetails

	return (
		<div style={{textAlign: 'center'}}>

			{success && <p className='loading' style={{backgroundColor: '#000', padding: '20px'}}>UPDATE SUCCESSFULL...</p>}

			<h2 className='planetDetailName'>{name}</h2>

			<div>
				<img src={imageUrl} height='170' style={{textAlign: 'right'}} alt='planet' />
			</div>

			<div>
				<form className='form' onSubmit={(e) => handleSubmit(e, planetDetails, setSelectedPlanet, setSuccess, setError)}>
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
								}} />
						</li>

						<li>
							{true &&
								<input 
									type='submit' 
									value='Update' />}
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

const handleSubmit = (e, planetDetails, setSelectedPlanet, setSuccess, setError) => {
	e.preventDefault()
	fetch('http://planets-dev.eu-west-2.elasticbeanstalk.com/api/Planets', {
		method: 'PUT',
		body: JSON.stringify({...planetDetails}),
		headers: {'Content-Type': 'application/json'}
	})
		.then(p => {
			if (p.status === 200){
				setSuccess(true)
				setSelectedPlanet(planetDetails.name)
				setTimeout(() => setSuccess(false), 2000)
			}
		}).catch(err => setError(err))
}