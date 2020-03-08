import React, {Fragment} from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="view-3D scale-stretched">
        <div id="solar-system">
          <div id="mercury" className="orbit">
            <div className="pos">
              <div className="planet">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="click" />
    </Fragment>
  )
}

export default App;
