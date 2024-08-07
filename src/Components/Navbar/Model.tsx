import React from 'react';
import sorry from './sorry.gif';
interface ModalProps {
  title: string;
  message: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg z-10 p-6 mx-4 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img src={sorry} alt="Sorry GIF" className="w-40 h-30" />
        </div>
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        <div className="mb-4">{message}</div>
        <button
          className="px-4 py-2 bg-lightGreen text-white rounded hover:opacity-70 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
