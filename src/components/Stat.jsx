function Stat({ icon, info, value, percentValue, range, isInProfit = false }) {
  return (
    <div className="border-border-color flex flex-col gap-[10px] rounded-[14px] border bg-white-color p-4">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 rounded-full border border-[#e6e6e6] p-2">
          <img src={`../../assets/${icon}.png`} />
        </div>

        {isInProfit ? (
          <img src="../../assets/stats-up.svg" />
        ) : (
          <img src="../../assets/stats-down.svg" />
        )}
      </div>

      <div className="flex flex-col gap-[5px]">
        <span className="text-text-color text-[18px] font-medium leading-[26px]">
          {info}
        </span>
        <span className="text-stat-color text-2xl font-semibold leading-[26px]">
          {value}
        </span>
      </div>

      <div className="flex items-center gap-[10px]">
        {isInProfit ? (
          <div className="bg-primary-color-12 flex justify-center gap-1 rounded-[1000px] px-2 py-1 text-primary-color">
            <img src="../../assets/trend-arrow-up.svg" />
            <span className="text-xs font-medium">{percentValue}%</span>
          </div>
        ) : (
          <div className="bg-error-color-12 flex justify-center gap-1 rounded-[1000px] px-2 py-1 text-error-color">
            <img src="../../assets/trend-arrow-down.svg" />
            <span className="text-xs font-medium">{percentValue}%</span>
          </div>
        )}

        <p className="text-sm font-normal text-neutral-gray-500">vs. {range}</p>
      </div>
    </div>
  );
}

export default Stat;
