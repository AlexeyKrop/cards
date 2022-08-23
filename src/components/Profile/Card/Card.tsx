import React from 'react'
import s from './Card.module.css'
import { Avatar } from '../Avatar/Avatar'
import { EditableSpan } from '../../editableSpan/EditableSpan'
import { UserType } from '../../../api/api'
import { AiOutlineLogout } from '@react-icons/all-files/ai/AiOutlineLogout'

type CardPropsTYpe = {
  title?: string
  user: UserType
  changeUserNameValue: (name: string, avatar?: string) => void
}
export const Card = (props: CardPropsTYpe) => {
  console.log('Card render')
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{props.title ? props.title : 'Personal Information'}</h2>
      <Avatar />
      <EditableSpan callBack={props.changeUserNameValue} title={props.user.name} />
      <span className={s.email}>{props.user.email}</span>
      <button className={s.btn}>
        <AiOutlineLogout />
        <span>Log out</span>
      </button>
    </div>
  )
}
