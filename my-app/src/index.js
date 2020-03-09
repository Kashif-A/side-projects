import ReactDOM from 'react-dom'
import React from 'react'
import Moment from 'react-moment'

(() => setInterval(() => { ReactDOM.render(<Moment date={new Date().getTime()}/>, document.getElementById('root')) }))()
