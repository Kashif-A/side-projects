import React from 'react'

const Controls = () =>
	<>
		<div id='data'>
			<a className='sun' title='sun' href='#sunspeed'>Sun</a>
			<a className='mercury' title='mercury' href='#mercuryspeed'>Mercury</a>
			<a className='venus' title='venus' href='#venusspeed'>Venus</a>
			<a className='earth active' title='earth' href='#earthspeed'>Earth</a>
			<a className='mars' title='mars' href='#marsspeed'>Mars</a>
			<a className='jupiter' title='jupiter' href='#jupiterspeed'>Jupiter</a>
			<a className='saturn' title='saturn' href='#saturnspeed'>Saturn</a>
			<a className='uranus' title='uranus' href='#uranusspeed'>Uranus</a>
			<a className='neptune' title='neptune' href='#neptunespeed'>Neptune</a>
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
  