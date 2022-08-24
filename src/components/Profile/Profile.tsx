import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
import { Card } from './Card/Card'
import { changeNameTC } from '../../bll/reducers/profileReducer'
import { Navigate } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'
import { loginTC } from '../../bll/reducers/authReducer'

export const Profile = () => {
  const user = useAppSelector(state => state.profile.user)
  const isLogin = useAppSelector(state => state.app.isLogin)
  console.log(user)
  const dispatch = useAppDispatch()
  if (!isLogin) {
    return <Navigate to="/login" />
  }
  const changeUserNameValue = (name: string, avatar?: string) => {
    dispatch(changeNameTC(name))
  }
  return (
    <>
      <Card user={user} changeUserNameValue={changeUserNameValue} />
    </>
  )
}
