import React from 'react'

const Tree = () => {
  return (
    <Child name='1'>
      <Child name='2'>
        <Child name='3' />
      </Child>
    </Child>
  )
}

export default Tree
