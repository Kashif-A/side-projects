import React, {Fragment} from 'react';

// import Planet from './components/Planet';
import './App.css';

function App() {
  return (
    <Fragment>
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

        <div id='universe' className='scale-stretched'>
          <div id='galaxy'>
            <div id='solar-system' className='earth'>
              <div id='mercury' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Mercury</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='venus' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Venus</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='earth' className='orbit'>
                <div className='pos'>
                  <div className='orbit'>
                    <div className='pos'>
                      <div className='moon'></div>
                    </div>
                  </div>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Earth</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='mars' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Mars</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='jupiter' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Jupiter</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='saturn' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <div className='ring'></div>
                    <dl className='infos'>
                      <dt>Saturn</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='uranus' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Uranus</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='neptune' className='orbit'>
                <div className='pos'>
                  <div className='planet'>
                    <dl className='infos'>
                      <dt>Neptune</dt>
                      <dd><span></span></dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div id='sun'>
                <dl className='infos'>
                  <dt>Sun</dt>
                  <dd><span></span></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default App;
