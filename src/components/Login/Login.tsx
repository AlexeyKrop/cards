import React from 'react'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import { loginTC } from '../../bll/reducers/authReducer'
import { Navigate } from 'react-router-dom'
import { PATH } from '../../Pages'

export const Login = () => {
  const { isLogin } = useAppSelector(state => state.app)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginTC(values))
    },
  })
  if (isLogin) {
    return <Navigate to={PATH.PROFILE} />
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <TextField
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  )
}
