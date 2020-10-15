const getTodos = async (options) => {
  const response = 'Test'
  const data = await response
  return data
}

const useGetTodos = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [data, setData] = React.useState(null)
  
  const execute = async (options = {}) => {
    try {
      setIsLoading(true)
      const todos = await getTodos(options)
      setData(todos)
      return todos
    } catch (e) {
      setError(e)
      setIsLoading(false)
      throw e
    }
  }
  
  return {
    isLoading,
    error,
    data,
    execute: React.useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
  }
}


const App = () => {
  // const { isLoading, data, execute } = useGetTodos()
  // console.log(isLoading)
  // console.log(data)
  // React.useEffect(() => { try { execute() } catch(ex) {} }, [execute])
  
  // console.log(isLoading)
  // console.log(data)
  // return null
  return 'TESTING'
}

ReactDOM.render(<App />, document.getElementById('app'))
