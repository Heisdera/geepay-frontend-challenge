import { orders, platforms } from "../data/data";

import List from "./List";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

function Dashboard() {
  return (
    <div className="m-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.8fr_1.2fr]">
      <SalesChart />

      <Stats />

      <List type="table" title="Last Orders" items={orders} />

      <List type="platforms" title="Top Platform" items={platforms} />
    </div>
  );
}

export default Dashboard;
