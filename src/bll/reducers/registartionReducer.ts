export const registrationReducer = (state: any, action: any): any => {
  return state
}

//ACTIONS CREATOR
export const registrationAC = (isRegistration: boolean) => ({
  type: 'SET-REGISTRATION',
  isRegistration,
})

//TYPE
type RegistrationAT = ReturnType<typeof registrationAC>
