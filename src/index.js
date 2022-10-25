import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App'

console.log('test6')

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

console.log('tes6')
