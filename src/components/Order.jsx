import InvoiceModal from "./InvoiceModal";
import Modal from "./Modal";

function Order({ order }) {
  const { name, image, date, amount, status } = order;

  return (
    <div className="row border-border-color border-t py-[13px]" role="row">
      <div className="flex items-center gap-2">
        <img src={image} alt={name} />
        <span className="capitalize">{name}</span>
      </div>

      <div className="flex items-center capitalize">{date}</div>

      <div className="flex items-center capitalize">{amount}</div>

      <div
        className={`flex items-center capitalize ${status === "paid" ? "text-success-color" : "text-error-color"}`}
      >
        {status}
      </div>

      <Modal>
        <Modal.Open opens="invoice">
          <button className="flex items-center gap-1">
            <img src="../../assets/download.svg" />
            <span>View</span>
          </button>
        </Modal.Open>

        <Modal.Window name="invoice">
          <InvoiceModal order={order} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Order;
