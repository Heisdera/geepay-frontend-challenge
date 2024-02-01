import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openModalName, setOpenModalName] = useState("");

  const closeModal = () => setOpenModalName("");
  const openModal = setOpenModalName;

  return (
    <ModalContext.Provider value={{ openModalName, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(openWindowName) });
}

function Window({ children, name }) {
  const { openModalName, closeModal } = useContext(ModalContext);
  const ref = useOutsideClick(closeModal);

  if (name !== openModalName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-[100vh] w-full bg-black/40 backdrop-blur-[1px] transition-all duration-500">
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-neutral-gray-50 px-6 py-6 shadow-lg"
        ref={ref}
      >
        <button
          className="absolute right-5 top-1 text-3xl"
          onClick={closeModal}
        >
          &times;
        </button>

        <div>{cloneElement(children, { oncloseModalModal: closeModal })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
