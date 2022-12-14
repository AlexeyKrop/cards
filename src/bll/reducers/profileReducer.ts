import { Dispatch } from 'redux'

import { profileAPI, UserType } from '../../api/api'

const initialState = {
  user: {
    name: '',
  } as UserType,
}

type InitialStateType = typeof initialState
export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileAT
): InitialStateType => {
  switch (action.type) {
    case 'SET-USER':
      return {
        ...state,
        user: action.user,
      }
    case 'CHANGE-NAME':
      return {
        ...state,
        user: action.updatedUser,
      }
    default:
      return state
  }
}

//ACTIONS CREATOR
export const changeNameAC = (updatedUser: UpdateUserType) =>
  ({ type: 'CHANGE-NAME', updatedUser } as const)
export const setUserAC = (user: UserType) => ({ type: 'SET-USER', user } as const)
export const changeNameTC = (name: string) => (dispatch: Dispatch) => {
  profileAPI
    .changeUserName(name)
    .then(res => {
      dispatch(changeNameAC(res.data.updatedUser))
    })
    .catch(err => console.log(err))
}

//TYPE
export type ProfileAT = ChangeNameAT | SetUserAT
export type ChangeNameAT = ReturnType<typeof changeNameAC>
export type SetUserAT = ReturnType<typeof setUserAC>
export type UpdateUserType = {
  avatar: null
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  rememberMe: boolean
  token: string
  tokenDeathTime: number
  updated: string
  verified: boolean
  __v: number
  _id: string
}
