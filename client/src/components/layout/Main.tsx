import { Emote, useGetEmotesQuery } from '../../generated'
import { TickerBox } from '../TickerBox'
// import { TickerSlider } from '../TickerSlider'

export const Main: React.FC = () => {
  const { data } = useGetEmotesQuery({ pollInterval: 10000 })
  // useEffect(() => {
  //   console.log()
  // }, [data])

  const sortEmotes = (a: Emote, b: Emote) => {
    if (a.count >= b.count) {
      return -1
    } else {
      return 1
    }
  }

  const emoteData = data && Object.values(data.emotes).slice(0, 100)
  return (
    <main
      className="grid overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${
          emoteData && Math.round(emoteData?.length / 10)
        }, 1fr)`,
      }}
    >
      {emoteData &&
        emoteData.sort(sortEmotes).map((e: any, i: number) => {
          return <TickerBox key={e.name + i} emote={e} />
        })}
    </main>
  )
}
