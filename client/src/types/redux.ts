import { BTTVEmotes } from './twitchChat'
// Action Types

export interface Emote {
  name: string
  id: keyof BTTVEmotes<Emote>
  count: number
  gif: any
}

export interface UpdateEmoteListAction {
  type: 'UPDATE_EMOTE_LIST'
  payload: Emote
}

export interface SetEmoteAction {
  type: 'SET_CURRENT_EMOTE'
  payload: Emote
}

export type RootAction = UpdateEmoteListAction | SetEmoteAction

export interface RootState {
  currentEmote: Partial<Emote>
}
