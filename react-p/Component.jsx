import React from 'react'
import Moment from 'react-moment'

export default function component () {
  const dateToFormat = '1976-04-19T12:59-0500'

  return (
    <>
      <p>Test</p>
      <Moment date={dateToFormat} />
    </>
  )
}