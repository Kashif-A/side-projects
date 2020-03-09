// ReactDOM.render(React.createElement('p', {}, 'test'), document.getElementById("app"))

// let a = () => { return React.Component }
// console.log(a)
// console.log(React.PureComponent)

import Component from './Component'

const dateToFormat = '1976-04-19T12:59-0500'

ReactDOM.render(
  <>
    <p>Test 2</p>
    <Component />
  </>
, document.getElementById('app'))