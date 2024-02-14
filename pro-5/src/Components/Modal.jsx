// 2nd step

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className=" z-50 relative m-auto min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl self-end "
              />
            </div>
            {children}
          </div>
          <div onClick={onClose} className="absolute top-0 z-40 h-screen w-screen backdrop-blur"/>
        </>
      )}
    </>
  );
};

export default Modal;




