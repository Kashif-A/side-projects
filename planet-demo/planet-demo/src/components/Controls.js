import React from 'react'

const Controls = () =>
<>
  <div id='navbar'>
      <a id='toggle-data' href='#data'><i class='icon-data'></i>Data</a>
      <a id='toggle-controls' href='#controls'><i class='icon-controls'></i>Controls</a>
    </div>
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
      <label class='set-view'>
        <input type='checkbox' />
      </label>
      <label class='set-zoom'>
        <input type='checkbox' />
      </label>
      <label>
        <input type='radio' class='set-speed' name='scale' checked />
        <span>Speed</span>
      </label>
      <label>
        <input type='radio' class='set-size' name='scale' />
        <span>Size</span>
      </label>
      <label>
        <input type='radio' class='set-distance' name='scale' />
        <span>Distance</span>
      </label>
    </div>
  </>

  export default Controls
  