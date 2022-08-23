import React from 'react'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import { useAppDispatch } from '../../customHooks/hooks'
import { registrationTC } from '../../bll/reducers/registartionReducer'

export const Registration = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(registrationTC(values))
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
        Submit
      </Button>
    </form>
  )
}
