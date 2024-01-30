import Progressbar from "./Progressbar";

function Platform({ platform }) {
  const { name, profitMargin, amount, percentageProfit } = platform;

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-stat-color text-[18px] font-semibold leading-[26px]">
            {name}
          </h4>
        </div>

        <Progressbar profitMargin={profitMargin} />

        <div className="flex items-center justify-between">
          <span className="text-text-color text-[18px] leading-[26px]">
            {amount}
          </span>

          <span className="text-text-color text-[18px] leading-[26px]">
            {percentageProfit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Platform;
