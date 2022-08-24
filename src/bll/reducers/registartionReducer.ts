import { authRegistration, RegisterDataType, RegistrationParamsType } from '../../api/api'
import { AxiosError } from 'axios'
import { setAppInitialAC } from './appReducer'

export type RegisterStateType = {
  loading: boolean
  success: boolean
  error: string
}

export const initialState: RegisterStateType = {
  loading: false,
  success: false,
  error: '',
}
export const registrationReducer = (
  state: any = initialState,
  action: registrationReducerType
): any => {
  switch (action.type) {
    case 'SET-SUCCESS':
      return {
        ...state,
        success: action.success,
      }
    case 'SET-ERROR':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

//ACTIONS CREATOR
export const registrationSuccessAC = (success: boolean) =>
  ({
    type: 'SET-SUCCESS',
    success,
  } as const)
export const registrationErrorAC = (error: string) =>
  ({
    type: 'SET-ERROR',
    error,
  } as const)

//THUNK
export const registrationTC = (data: RegistrationParamsType) => (dispatch: any) => {
  authRegistration
    .registration(data)
    .then(res => console.log(res))
    .catch((error: AxiosError<RegisterDataType>) => console.log(error.response?.data.error))
    .finally(() => setAppInitialAC(true))
}

//TYPE
type RegistrationSuccessAT = ReturnType<typeof registrationSuccessAC>
type RegistrationErrorAT = ReturnType<typeof registrationErrorAC>
export type registrationReducerType = RegistrationSuccessAT | RegistrationErrorAT
