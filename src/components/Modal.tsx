import React from "react";
import ModalContent from "./ModalContent";

interface ModalProps {
  closeModal: () => void;
  onSelect: (product: any) => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal, onSelect }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 fixed inset-0" onClick={closeModal}></div>
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <ModalContent closeModal={closeModal} onSelect={onSelect} />
      </div>
    </div>
  );
};

export default Modal;
