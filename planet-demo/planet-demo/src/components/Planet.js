import React from 'react'

const Planet = props => {
    const { planet } = props
    return (
        <div id={props.planet} className='orbit'>
            <div className='pos'>
                <div className='planet'>
                    <dl className='infos'>
                        <dt>{`${planet[0].toUpperCase()}${planet.substring(1, planet.length)}`}</dt>
                        <dd> <span></span> </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Planet;
