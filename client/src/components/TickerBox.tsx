import { useEffect, useState } from 'react'
import { Emote } from '../generated'

interface TickerBoxProps {
  emote: Emote
}

const formatCurrency = (n: number) => {
  return n / 100
}

export const TickerBox: React.FC<TickerBoxProps> = (e: any) => {
  const [animationState, setAnimationState] = useState<boolean>(true)
  const [priceChange, setPriceChange] = useState<boolean>(false)

  const {
    emote: { count, gif },
  } = e

  let previousCount = 0
  useEffect(() => {
    if (previousCount < count) {
      setPriceChange(true)
    } else {
      previousCount = count
      setPriceChange(true)
    }
  }, [count])

  return (
    <div
      className={`${
        animationState && priceChange
          ? `fade-in-s`
          : animationState
          ? 'fade-in-f'
          : false
      } flex-1 p-3 `}
      id={e.name}
    >
      <div className="tickerBox flex flex-col h-20 justify-between  items-center">
        <div className="mb-2">
          <img className="w-10 h-15" alt="cum" src={gif} />
        </div>
        <div className="stwop flex items-center text-xs">
          <p className="">${formatCurrency(count)}</p>
        </div>
      </div>
    </div>
  )
}
