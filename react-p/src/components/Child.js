import React from 'react'

const Child = (props) => {
  const [num, setNum] = React.useState < number > (0)
  return (
    <div>
      <h3>Child {props.name}</h3>
      <h6>Num {props.name}</h6>
      <button onPress={() => setNum(num + 1)} style={{
        padding: 15,
        backgroundColor: 'aqua'
      }} />
      {props.children && props.children()}
    </div>
  )
}

export default Child
