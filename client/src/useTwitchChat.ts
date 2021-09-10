import { useEffect } from 'react'
import Chat from 'twitch-chat-emotes'
import { useUpdateEmoteCount } from './apollo/useGraphql'
import { Emote } from './types'

export const useTwitchChat = () => {
  const updateEmote = useUpdateEmoteCount()

  const buyingPower = {
    duplicateEmoteLimit: 4,
    maximumEmoteLimit: 4,
    duplicateEmoteLimit_pleb: 2,
    maximumEmoteLimit_pleb: 2,
  }

  return useEffect(() => {
    let channels = ['moonmoon']

    const queryVars = {
      channels: {
        ...channels,
      },
    }
    const ChatInstance = new Chat({
      channels,
      ...buyingPower,
    })
    if (queryVars.channels) {
      ChatInstance.on('emotes', (emotes: Emote[]) => {
        for (let e of emotes) {
          let data = {
            name: e.name,
            gif: e.gif.url || undefined,
          }
          updateEmote({ name: data.name, gif: data.gif })
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

// const queryParts = window.location.href.replace(
//   /[?&]+([^=&]+)=([^&]*)/gi,
//   (m, key, value) => {
//     return (queryVars.channels[key] = value)
//   }
// )
