import Stat from "./Stat";

function Stats() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Stat
        icon="box-tick"
        info="Total Order"
        value="350"
        percentValue="23.5"
        range="previous month"
        isInProfit={true}
      />
      <Stat
        icon="3d-rotate"
        info="Total Refund"
        value="270"
        percentValue="23.5"
        range="previous month"
        isInProfit={false}
      />
      <Stat
        icon="shopping-cart"
        info="Average Sales"
        value="1567"
        percentValue="23.5"
        range="previous month"
        isInProfit={false}
      />
      <Stat
        icon="coin"
        info="Total Income"
        value="$350,000"
        percentValue="23.5"
        range="previous month"
        isInProfit={true}
      />
    </section>
  );
}

export default Stats;
