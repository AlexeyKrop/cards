import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
  withCredentials: true,
})
export type RegistrationParamsType = {
  email: string
  password: string
}
export const authRegistration = {
  registration(params: RegistrationParamsType) {
    return instance.post<RegisterDataType>(`/auth/register`, params)
  },
}
export type RegisterDataType = {
  error: string
}
