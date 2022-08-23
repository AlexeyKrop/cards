import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../../Pages'
import s from './Header.module.css'

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <NavLink to={PATH.PROFILE}>PROFILE</NavLink>
      <NavLink to={PATH.ENTER_NEW_PASSWORD}>ENTER_NEW_PASSWORD</NavLink>
      <NavLink to={PATH.LOGIN}>LOGIN</NavLink>
      <NavLink to={PATH.ERROR404}>ERROR404</NavLink>
      <NavLink to={PATH.RECOVERY_PASSWORD}>RECOVERY_PASSWORD</NavLink>
      <NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink>
      <NavLink to={PATH.CUSTOM_STAND}>CUSTOM_STAND</NavLink>
    </div>
  )
}
