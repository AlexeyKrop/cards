import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'

import { appReducer } from '../reducers/appReducer'
import { authReducer } from '../reducers/authReducer'
import { profileReducer } from '../reducers/profileReducer'
import { registrationReducer } from '../reducers/registartionReducer'

const rootReducers = combineReducers({
  profile: profileReducer,
  app: authReducer,
  registration: registrationReducer,
  init: appReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppRootStateType = ReturnType<typeof rootReducers>
// export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
//window.store = store
