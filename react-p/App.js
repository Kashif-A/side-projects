import Tree from './src/components/Tree'

const App = () => {
  const [num, setNum] = React.useState(1)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)} style={{ padding: 20, backgroundColor: 'red' }} />
      <Tree />
      <Tree />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
