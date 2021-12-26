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
        <Child name={`${tree}.3`}>
          <Child name={`${tree}.4`}>
            {() => <Child name={`${tree}.5`} />}
          </Child>
        </Child>
      </Child>
    </Child>
  )
}

const Child = (props) => {
  console.log(`Child ${props.name}`)
  console.log('p.c:  ', props.children)

  const { propNum, children, name } = props

  const [num, setNum] = React.useState(0)
  return (
    <div style={styles.child}>
      <h3>Child {name}</h3>
      {propNum && <h4>Num {num}</h4>}
      {propNum && <h4>PropNum {propNum}</h4>}
      <button onClick={() => setNum(num + 1)} style={styles.buttonB} />
      {children && typeof children === 'function' ? children() : children}
    </div>
  )
}

const App = () => {
  const [num, setNum] = React.useState(1)

  return (
    <div>
      <button onClick={() => setNum(num + 1)} style={styles.buttonA} />
      <br />
      <Tree tree={num + 1} />
      <Tree tree={num + 2} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
