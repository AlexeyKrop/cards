import React from 'react'
import { useAppDispatch } from '../../customHooks/hooks'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import { loginTC } from '../../bll/reducers/authReducer'

export const Login = () => {
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
