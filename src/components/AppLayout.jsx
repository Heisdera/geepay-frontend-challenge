import { useState } from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PopUpSidebar from "./PopUpSidebar";

function AppLayout() {
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow((show) => !show);
  }

  return (
    <div className="grid h-screen grid-rows-[82px] md:grid-cols-[5rem_1fr]">
      <Header handleToggle={handleToggle} />
      <Sidebar open={show} />

      <main className="bg-neutral-gray-50">
        {show && <PopUpSidebar setShow={setShow} />}
        <Dashboard />
      </main>
    </div>
  );
}

export default AppLayout;
