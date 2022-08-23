import axios, { AxiosResponse } from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
  withCredentials: true,
})
export type RegistrationParamsType = {
  email: string
  password: string
  rememberMe?: boolean
}
export const authRegistration = {
  registration(params: RegistrationParamsType) {
    return instance.post<RegisterDataType>(`/auth/register`, params)
  },
}

export const authLogin = {
  login(params: RegistrationParamsType) {
    return instance.post(`/auth/login`, params)
  },
}
export type RegisterDataType = {
  error: string
}
export type UserType = {
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  rememberMe: false
  token: string
  tokenDeathTime: number
  updated: string
  verified: boolean
  __v: number
  _id: string
}
