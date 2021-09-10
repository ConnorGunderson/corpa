import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import { RootAction, RootState } from '../types'
import initialState from './initialState'

const reducer = (state: RootState = initialState, action: RootAction) => {
  switch (action.type) {
    case 'SET_CURRENT_EMOTE':
      return {
        ...state,
        currentEmote: action.payload,
      }
    default:
      return { ...state }
  }
}

export const store = createStore(reducer, initialState, applyMiddleware(logger))

export type AppDispatch = typeof store.dispatch
