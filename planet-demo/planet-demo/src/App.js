import React, { Fragment } from 'react';

// import Planet from './components/Planet';
import './App.css';
import Planet from './components/Planet';

function App() {
  return (
    <Fragment>

      {renderControls()}
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
        <div id='sun'>
          <dl className='infos'>
            <dt>Sun</dt>
            <dd><span></span></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

const renderControls = () =>
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
