//REDUCER
import { authMe, RegistrationParamsType } from '../../api/api'

import { setUserAC } from './profileReducer'

const initialState = {
  isLogin: false,
}

type initialStateType = typeof initialState
export const authReducer = (state: initialStateType = initialState, action: AuthReducerType) => {
  switch (action.type) {
    case 'SET-IS-LOGIN':
      return {
        ...state,
        isLogin: action.isLogin,
      }
  }

  return state
}
//ACTIONS

export const setIsLoginAC = (isLogin: boolean) =>
  ({
    type: 'SET-IS-LOGIN',
    isLogin,
  } as const)

// THUNK

export const loginTC = (data: RegistrationParamsType) => (dispatch: any) => {
  authMe.login(data).then(res => {
    dispatch(setIsLoginAC(true))
    dispatch(setUserAC(res.data))
  })
}
export const logoutTC = () => (dispatch: any) => {
  authMe.logout().then(res => {
    dispatch(setIsLoginAC(false))
  })
}

//TYPE
export type SetIsLoginAT = ReturnType<typeof setIsLoginAC>
export type AuthReducerType = SetIsLoginAT
