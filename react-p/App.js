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
    <Child {...props} name={`${tree}.1`}>
      {props => <Child {...props} name={`${tree}.2`}>
        {props => <Child {...props} name={`${tree}.3`} />}
      </Child>}
    </Child>
  )
}

const Child = (props) => {
  console.log(`Child ${props.name}`)

  const { propNum, children, name } = props

  const [num, setNum] = React.useState(1)
  return (
    <div style={styles.child}>
      <h3>Child {name}</h3>
      {propNum && <h4>Num {num}</h4>}
      {propNum && <h4>PropNum {propNum}</h4>}
      <button onClick={() => setNum(num + 1)} style={styles.buttonB} />
      {children && children({
        propNum: num
      })}
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
