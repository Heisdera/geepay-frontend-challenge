import Logo from "./Logo";

function InvoiceModal({ order }) {
  const { orderId, name, date, amount, status } = order;

  return (
    <div className="flex w-[270px] flex-col gap-1 rounded-md text-sm">
      <Logo />

      <div className="border-color flex items-center justify-between border-b border-dashed pb-4 pt-1">
        <div>
          <h2 className="text-xl font-semibold ">Invoice</h2>

          <p className="text-sm text-neutral-gray-400">{date}</p>
        </div>

        <h2 className="text-lg text-neutral-gray-400">#{orderId}</h2>
      </div>

      <div className="border-color flex items-center justify-between border-b border-dashed pb-3 pt-1">
        <div>
          <p className="text-neutral-gray-400">Name</p>

          <h3 className="font-semibold ">{name}</h3>
        </div>

        <div className="flex gap-6">
          <div>
            <p className="text-neutral-gray-400">Status</p>

            <h3 className="font-semibold capitalize">{status}</h3>
          </div>

          <div>
            <p className="text-neutral-gray-400">Amount</p>

            <h3 className="font-semibold">{amount}</h3>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button className="px-2 pt-3">
          <img className="h-6 w-6" src="../../public/assets/printer.svg" />
        </button>

        <button className="px-2 pt-[14px]">
          <img className="h-7 w-7" src="../../public/assets/download-2.svg" />
        </button>
      </div>
    </div>
  );
}

export default InvoiceModal;
