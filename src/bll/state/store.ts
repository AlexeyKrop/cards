import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { registrationReducer } from '../reducers/registartionReducer'

const rootReducers = combineReducers({
  registration: registrationReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppRootStateType = ReturnType<typeof rootReducers>
// export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
//window.store = store
