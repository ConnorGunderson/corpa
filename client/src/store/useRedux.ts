import { useDispatch } from 'react-redux'
import { Emote, RootAction } from '../types'

type useGenericHook<T> = () => (payload: T) => void

export const useSetEmote: useGenericHook<Emote> = () => {
  const dispatch = useDispatch()
  return (payload: Emote) => {
    const action: RootAction = {
      type: 'SET_CURRENT_EMOTE',
      payload,
    }
    dispatch(action)
  }
}

export const useHook = () => {}
