//REDUCER
import { authMe, RegistrationParamsType, UserType } from '../../api/api'

const initialState = {
  isLogin: false,
  user: {} as UserType,
}
type initialStateType = typeof initialState
export const authReducer = (state: initialStateType = initialState, action: AuthReducerType) => {
  switch (action.type) {
    case 'SET-USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET-IS-LOGIN':
      return {
        ...state,
        isLogin: action.isLogin,
      }
  }
  return state
}
//ACTIONS
export const setUserAC = (user: UserType) => ({ type: 'SET-USER', user } as const)
export const setIsLoginAC = (isLogin: boolean) => ({ type: 'SET-IS-LOGIN', isLogin } as const)

// THUNK
export const authUserTC = () => {
  return (dispatch: any) => {
    authMe.me().then(res => {
      dispatch(setUserAC(res.data))
    })
  }
}
export const loginTC = (data: RegistrationParamsType) => (dispatch: any) => {
  authMe.login(data).then(res => {
    // dispatch(setUserAC(res.data))
    dispatch(setIsLoginAC(true))
  })
}

//TYPE

export type SetUserAT = ReturnType<typeof setUserAC>
export type SetIsLoginAT = ReturnType<typeof setIsLoginAC>
export type AuthReducerType = SetUserAT | SetIsLoginAT
