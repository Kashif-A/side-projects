import React from 'react'

import Planet from './Planet'
import Sun from './Sun'

const Universe = () =>
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

export default Universe
