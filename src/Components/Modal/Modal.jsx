import React from "react";
import { ModalBackdrop } from "./Modal.Style";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ selcted, setSelcted }) => {
  return (
    <ModalBackdrop initial={{ opacity: 0,y:'-100vh' }} animate={{ opacity: 1,y:'0' }} exit={{ opacity: 0 }} transition={{ type : "spring", stiffness: 60}}>
      <AiOutlineCloseCircle
        className="close"
        onClick={() => setSelcted(null)}
      />
      <img src={selcted} alt="title" loading="lazy" />
      <button onClick={() => window.open(selcted)}>Open Image</button>
    </ModalBackdrop>
  );
};

export default Modal;
