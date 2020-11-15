const Child = () => {
  const [num, setNum] = React.useState(1)

  return (
    <div>
      <h1>{num}</h1>
      <button onKeyPress={() => setNum(num + 1)} style={{ padding: 20, backgroundColor: 'red' }} />
    </div>
  )
}

const App = () => <Child />

ReactDOM.render(<App />, document.getElementById('app'))
