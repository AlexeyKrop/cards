import React from 'react'

import { Navigate } from 'react-router-dom'

import { changeNameTC } from '../../bll/reducers/profileReducer'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'

import { Card } from './Card/Card'

export const Profile = () => {
  const user = useAppSelector(state => state.profile.user)
  const isLogin = useAppSelector(state => state.app.isLogin)
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
