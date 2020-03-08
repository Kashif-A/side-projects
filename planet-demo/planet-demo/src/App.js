import React, {Fragment} from 'react';

import Planet from './components/Planet';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="view-3D scale-stretched">
        <div id="solar-system">
          <Planet />
        </div>
      </div>
      <div className="click" />
    </Fragment>
  )
}

export default App;
