import React from 'react'

const Child1 = () => {
  console.log('Child1 called')

  React.useEffect(() => {
    console.log('Child1 mount')
  }, [])

  React.useEffect(() => {
    console.log('Child1 re-render in effect')
  })

  return(
  <div>
    {console.log('before')}
    <p>Child1</p>
    {console.log('after')}
  </div>
  )
}

export default Child1
