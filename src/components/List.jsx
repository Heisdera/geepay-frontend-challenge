import { useState } from "react";
import Order from "./Order";
import Platform from "./Platform";
import Platforms from "./Platforms";
import OrderTable from "./OrderTable";
import Title from "./Title";

function List({ type, items }) {
  const [isCollaped, setIsCollapsed] = useState(true);

  function handleCollapse() {
    setIsCollapsed((collapsed) => !collapsed);
  }

  let displayItems;

  if (type === "table") displayItems = isCollaped ? items.slice(0, 5) : items;

  if (type === "platforms")
    displayItems = isCollaped ? items.slice(0, 3) : items;

  return (
    <section className="border-border-color h-fit w-full rounded-[14px] border bg-white-color px-5 py-[18px]">
      {type === "table" ? (
        <>
          <Title
            title="Last Orders"
            expand="expand"
            toggleCollapse={handleCollapse}
            isCollaped={isCollaped}
          />
          <OrderTable
            items={displayItems}
            render={(order) => <Order order={order} key={order.id} />}
          />
        </>
      ) : (
        <>
          <Title
            title="Top Platform"
            expand="expand"
            toggleCollapse={handleCollapse}
            isCollaped={isCollaped}
          />
          <Platforms
            items={displayItems}
            render={(platform) => (
              <Platform platform={platform} key={platform.id} />
            )}
          />
        </>
      )}
    </section>
  );
}

export default List;
