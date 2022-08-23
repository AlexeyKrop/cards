import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Profile } from './components/Profile/Profile'
import { RecoveryPassword } from './components/RecoveryPassword/RecoveryPassword'
import { Error404 } from './components/Error404/Error404'
import CreatePassword from './components/CreatePassword/CreatePassword'
import { Registration } from './components/Registration/Regirstration'
import { CustomStand } from './components/CustomStand/CustomStand'
export const PATH = {
  LOGIN: '/login',
  PROFILE: '/profile',
  REGISTRATION: '/registration',
  RECOVERY_PASSWORD: '/recovery',
  ERROR404: '/404',
  ENTER_NEW_PASSWORD: '/password',
  CUSTOM_STAND: '/stand',
}
export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.PROFILE} />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.ENTER_NEW_PASSWORD} element={<CreatePassword />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.CUSTOM_STAND} element={<CustomStand />} />
        <Route path={'/*'} element={<Error404 />} />
      </Routes>
    </div>
  )
}
