import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2020-01-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2020-01-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2020-01-10T19:20:14.298Z',
    important: true
  }
]

axios.get('http://localhost:3001/notes').then(
  response => {
    const notes = response.data
    ReactDOM.render(
      <App notes={notes} />,
      document.getElementById('root')
    )
  }
)



