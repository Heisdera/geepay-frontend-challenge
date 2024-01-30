function OrderTable({ render, items }) {
  return (
    <div className="hide-scrollbar overflow-x-scroll" role="table">
      <div className=" min-w-[600px]">
        <div className="row mb-4" role="row">
          <div>Name</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Invoice</div>
        </div>

        {items.map(render)}
      </div>
    </div>
  );
}

export default OrderTable;
