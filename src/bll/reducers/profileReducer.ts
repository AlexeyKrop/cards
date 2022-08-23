import { Dispatch } from 'redux'
import { profileAPI, UserType } from '../../api/api'

const initialState = {
  user: {} as UserType,
}
type InitialStateType = typeof initialState
export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileAT
): InitialStateType => {
  switch (action.type) {
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
export const changeNameAC = (updatedUser: UpdateUserType) => ({ type: 'CHANGE-NAME', updatedUser })

//THUNK
export const changeNameTC = (name: string) => (dispatch: Dispatch) => {
  // dispatch(changeNameAC(name))
  profileAPI
    .changeUserName(name)
    .then(res => dispatch(changeNameAC(res.data.updatedUser)))
    .catch(err => console.log(err))
}

//TYPE
export type ProfileAT = ChangeNameAT
export type ChangeNameAT = ReturnType<typeof changeNameAC>
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
