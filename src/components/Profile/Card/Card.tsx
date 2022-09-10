import React from 'react'

import { Button } from '@mui/material'
import { AiOutlineLogout } from '@react-icons/all-files/ai/AiOutlineLogout'

import { UserType } from '../../../api/api'
import { logoutTC } from '../../../bll/reducers/authReducer'
import { useAppDispatch } from '../../../customHooks/hooks'
import { EditableSpan } from '../../editableSpan/EditableSpan'
import { Avatar } from '../Avatar/Avatar'

import s from './Card.module.css'

type CardPropsTYpe = {
  title?: string
  user: UserType
  changeUserNameValue: (name: string, avatar?: string) => void
}
export const Card = (props: CardPropsTYpe) => {
  const dispatch = useAppDispatch()

  console.log('Card render')
  const onClickHandler = () => {
    dispatch(logoutTC())
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{props.title ? props.title : 'Personal Information'}</h2>
      <Avatar />
      <EditableSpan callBack={props.changeUserNameValue} title={props.user.name} />
      <span className={s.email}>{props.user.email}</span>
      <Button className={s.btn} onClick={onClickHandler}>
        <AiOutlineLogout />
        <span>Log out</span>
      </Button>
    </div>
  )
}
