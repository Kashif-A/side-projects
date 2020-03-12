import React, { useState } from 'react'

const Controls = (props) =>
	<>
		<div id='data'>
			{renderPlanetControls(props.setSelectedPlanet)}
		</div>
		<div id='controls'>
			<label>
				<input type='radio' className='set-speed' name='scale' defaultChecked />
				<span>Show Speed</span>
			</label>
			<label>
				<input type='radio' className='set-distance' name='scale' />
				<span>Show Distance</span>
			</label>
		</div>
	</>

export default Controls

const renderPlanetControls = (setSelectedPlanet) => 
	<>
		<a className='sun' title='sun' href='#sunspeed' onClick={() => setSelectedPlanet('sun')}>Sun</a>
		<a className='mercury' title='mercury' href='#mercuryspeed' onClick={() => setSelectedPlanet('mercury')}>Mercury</a>
		<a className='venus' title='venus' href='#venusspeed' onClick={() => setSelectedPlanet('venus')}>Venus</a>
		<a className='earth active' title='earth' href='#earthspeed' onClick={() => setSelectedPlanet('earth')}>Earth</a>
		<a className='mars' title='mars' href='#marsspeed' onClick={() => setSelectedPlanet('mars')}>Mars</a>
		<a className='jupiter' title='jupiter' href='#jupiterspeed' onClick={() => setSelectedPlanet('jupiter')}>Jupiter</a>
		<a className='saturn' title='saturn' href='#saturnspeed' onClick={() => setSelectedPlanet('saturn')}>Saturn</a>
		<a className='uranus' title='uranus' href='#uranusspeed' onClick={() => setSelectedPlanet('uranus')}>Uranus</a>
		<a className='neptune' title='neptune' href='#neptunespeed' onClick={() => setSelectedPlanet('neptune')}>Neptune</a>
	</>
