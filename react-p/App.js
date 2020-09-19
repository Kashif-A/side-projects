import React from 'react'
import Child1 from './src/components/Child1'
import Child2 from './src/components/Child1'

function App () {
  return (
    <Child1 />
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)