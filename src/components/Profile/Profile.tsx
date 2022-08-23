import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
import { Card } from './Card/Card'
import { changeNameTC, setUserTC } from '../../bll/reducers/profileReducer'

export const Profile = () => {
  const user = useAppSelector(state => state.profile.user)
  console.log(user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!user) {
      return
    }
    dispatch(setUserTC())
  }, [])

  const changeUserNameValue = (name: string, avatar?: string) => {
    dispatch(changeNameTC(name))
  }
  return <Card user={user} changeUserNameValue={changeUserNameValue} />
}
