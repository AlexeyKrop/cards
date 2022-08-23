import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import { Pages } from './Pages'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Pages />
      </HashRouter>
    </div>
  )
}

export default App
