import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
import { Card } from './Card/Card'
import { changeNameTC, setUserTC } from '../../bll/reducers/profileReducer'
import { Navigate } from 'react-router-dom'

export const Profile = () => {
  const user = useAppSelector(state => state.profile.user)
  const isLogin = useAppSelector(state => state.app.isLogin)
  console.log(isLogin)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setUserTC())
  }, [dispatch])
  if (!isLogin) {
    return <Navigate to="/login" />
  }
  const changeUserNameValue = (name: string, avatar?: string) => {
    dispatch(changeNameTC(name))
  }
  return <Card user={user} changeUserNameValue={changeUserNameValue} />
}
