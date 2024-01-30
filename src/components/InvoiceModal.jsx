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
          <i className="h-6 w-6">        
<svg enable-background="new 0 0 50 50" height="28px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="28px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50" /><path d="M40,15V1H10v14" fill="none" stroke="#929292" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" /><path d="M40,29v20H10V29H40z" fill="none" stroke="#929292" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" /><path d="M10,40H3  c-1.104,0-2-0.896-2-2V17c0-1.104,0.896-2,2-2h44c1.104,0,2,0.896,2,2v21c0,1.104-0.896,2-2,2h-7" fill="none" stroke="#929292" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" /><line fill="none" stroke="#929292" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" x1="35" x2="15" y1="35" y2="35" /><line fill="none" stroke="#929292" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" x1="31" x2="15" y1="39" y2="39" /><line fill="none" stroke="#929292" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" x1="35" x2="15" y1="43" y2="43" /></svg>
          </i>
        </button>

        <button className="px-2 pt-3">
          <i className="h-6 w-6">
<svg class="bi bi-download" fill="#929292" height="28" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
          </i>
          </button>
      </div>
    </div>
  );
}

export default InvoiceModal;
