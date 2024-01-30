function Stat({ icon, info, value, percentValue, range, isInProfit = false }) {
  return (
    <div className="flex min-w-[236px] flex-col gap-[10px] rounded-[14px] border border-border-color bg-white-color p-4">
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
        <span className="text-[18px] font-medium leading-[26px] text-text-color">
          {info}
        </span>
        <span className="text-2xl font-semibold leading-[26px] text-stat-color">
          {value}
        </span>
      </div>

      <div className="flex items-center gap-[10px]">
        {isInProfit ? (
          <div className="flex justify-center gap-1 rounded-[1000px] bg-primary-color-12 px-2 py-1 text-primary-color">
            <img src="../../assets/trend-arrow-up.svg" />
            <span className="text-xs font-medium">{percentValue}%</span>
          </div>
        ) : (
          <div className="flex justify-center gap-1 rounded-[1000px] bg-error-color-12 px-2 py-1 text-error-color">
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
