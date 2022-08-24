import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import { Pages } from './Pages'
import { Header } from './components/Header/Header'
import { useAppDispatch, useAppSelector } from './customHooks/hooks'
import CircularProgress from '@mui/material/CircularProgress'
import { appInitialTC } from './bll/reducers/appReducer'

function App() {
  const isInitialized = useAppSelector(state => state.init.initialized)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(appInitialTC())
  }, [dispatch])
  if (!isInitialized) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <CircularProgress />
      </div>
    )
  }
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
