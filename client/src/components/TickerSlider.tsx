interface TickerBoxProps {
  data: any
}

const formatCurrency = (n: number) => {
  return n / 100
}

export const TickerSlider: React.FC<TickerBoxProps> = ({ data }) => {
  return (
    <div className="slider flex w-slider border p-10 border-gray-600 ">
      <div className="tickerBox">
        <div>{data[0].name}</div>
        <div className="">${formatCurrency(data[0].count)}</div>
      </div>
    </div>
  )
}
