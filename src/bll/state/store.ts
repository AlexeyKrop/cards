import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import { appReducer } from '../reducers/appReducer'
import { authReducer } from '../reducers/authReducer'
import thunk, { ThunkDispatch } from 'redux-thunk'

const rootReducers = combineReducers({
  app: appReducer,
  auth: authReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppRootStateType = ReturnType<typeof rootReducers>
// export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
//window.store = store
