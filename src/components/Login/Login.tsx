import React from 'react'

import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'

import { loginTC } from '../../bll/reducers/authReducer'
import { useAppDispatch, useAppSelector } from '../../customHooks/hooks'
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
    <>
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
      <h6>incubatorfriday@gmail.com</h6>
      <h6>123FridayIncubator123</h6>
    </>
  )
}
