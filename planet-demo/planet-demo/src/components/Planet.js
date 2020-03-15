import React from 'react'

const Planet = props => {
	const { planet } = props
	return (
		<div id={props.planet} className='orbit'>
			<div className='pos'>
                
				{planet === 'earth' &&
					<div className='orbit'>
						<div className='pos'>
							<div className='moon'></div>
						</div>
					</div>}

				<div className='planet'>
                    
					{planet === 'saturn' && <div className='ring'></div>}
                    
					<dl className='infos'>
						<dt>{`${planet[0].toUpperCase()}${planet.substring(1, planet.length)}`}</dt>
						<dd> <span></span> </dd>
					</dl>
				</div>
			</div>
		</div>
	)
}

export default Planet
