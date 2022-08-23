//REDUCER
import { authLogin, RegistrationParamsType } from '../../api/api'

const initialState = {}

export const authReducer = (state: any, action: any) => {
  return state
}

export const loginTC = (data: RegistrationParamsType) => (dispatch: any) => {
  authLogin.login(data).then(res => console.log(res))
}
