import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
import { Card } from './Card/Card'
import { changeNameTC } from '../../bll/reducers/profileReducer'
import { UserType } from '../../api/api'
import { authUserTC } from '../../bll/reducers/authReducer'

export const Profile = () => {
  const user = useAppSelector(state => state.app.user)
  console.log(user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authUserTC())
  }, [])

  const changeUserNameValue = (name: string, avatar?: string) => {
    dispatch(changeNameTC(name))
  }
  return <Card user={user} changeUserNameValue={changeUserNameValue} />
}
