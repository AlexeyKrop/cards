import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
import { Card } from './Card/Card'
import { changeNameTC } from '../../bll/reducers/profileReducer'
import { Navigate } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'

export const Profile = () => {
  const user = useAppSelector(state => state.profile.user)
  const isLogin = useAppSelector(state => state.app.isLogin)
  const status = useAppSelector(state => state.init.status)
  const dispatch = useAppDispatch()
  console.log(user)
  // useEffect(() => {
  //   if (user.name === '') {
  //     return
  //   }
  //   dispatch(setUserTC())
  // }, [dispatch])
  if (!isLogin) {
    return <Navigate to="/login" />
  }
  const changeUserNameValue = (name: string, avatar?: string) => {
    dispatch(changeNameTC(name))
  }
  return (
    <>
      {status === 'loading' && <LinearProgress sx={{ position: 'absolute', width: '100%' }} />}
      <Card user={user} changeUserNameValue={changeUserNameValue} />
    </>
  )
}
