const styles = {
  child: {
    display: 'inline-block',
    borderStyle: 'solid',
    marginRight: 5,
    marginTop: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  buttonA: {
    padding: 15,
    backgroundColor: 'red'
  },
  buttonB: {
    padding: 15,
    backgroundColor: 'aqua'
  }
}
const Tree = (props) => {
  const { tree } = props
  return (
    <Child name={`${tree}.1`}>
      <Child name={`${tree}.2`}>
        <Child name={`${tree}.3`} />
      </Child>
    </Child>
  )
}

const Child = (props) => {
  console.log(`Child ${props.name}`)
  const [num, setNum] = React.useState(0)
  return (
    <div style={styles.child}>
      <h3>Child {props.name}</h3>
      {/* <h6>Num {props.name}</h6> */}
      <button onClick={() => setNum(num + 1)} style={styles.buttonB} />
      {props.children && props.children}
    </div>
  )
}

const App = () => {
  const [num, setNum] = React.useState(1)

  return (
    <div>
      {/* <h1>{num}</h1> */}
      <button onClick={() => setNum(num + 1)} style={styles.buttonA} />
      <br />
      <Tree tree='1' />
      <Tree tree='2' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
