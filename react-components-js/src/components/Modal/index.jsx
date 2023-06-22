import X from "./assets/X.svg";
import "./Modal.css";

import { useModalContext } from "../../hooks/useModalContext";
import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [onClose, setOnClose] = useState(null);
  const [modalHeader, setModalHeader] = useState("");
  const modalRef = useRef(null);

  const closeModal = () => {
    setContent(null);
    if (modalRef.current) {
      modalRef.current.close();
    }
    if (typeof onClose === "function") {
      onClose();
      setOnClose(null);
    }
  };

  const showModal = (modalBody, modalHeader) => {
    setContent(modalBody);
    if (modalHeader) {
      setModalHeader(modalHeader);
    }
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const value = {
    closeModal,
    showModal,
    setOnClose,
    setModalHeader,
  };

  const closeOnOutsideClick = (e) => {
    if (modalRef.current) {
      const dimensions = modalRef.current.getBoundingClientRect();
      if (
        e.clientX < dimensions.left ||
        e.clientX > dimensions.right ||
        e.clientY < dimensions.top ||
        e.clientY > dimensions.bottom
      ) {
        modalRef.current.close();
      }
    }
  };

  return (
    <ModalContext.Provider value={value}>
      <dialog
        id="modal"
        ref={modalRef}
        onClick={closeOnOutsideClick}
        title="Close"
      >
        <div style={{ display: "flex" }} tabIndex={-1}>
          <CloseButton onClose={closeModal} />
          <h2 id="modal-header">{modalHeader}</h2>
        </div>
        {content}
      </dialog>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function CloseButton({ onClose }) {
  return (
    <button className="close-button" onClick={onClose}>
      <img
        src={X}
        alt="close menu"
        style={{
          width: "16px",
          height: "16px",
          position: "relative",
          top: "30%",
          left: "0",
        }}
      />
    </button>
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export function ModalOpenButton({ onOpen, modalBody, modalHeader }) {
  const { showModal } = useModalContext();
  const handleClick = () => {
    if (onOpen) {
      onOpen();
      showModal(modalBody, modalHeader);
    }
  };
  return <button onClick={handleClick}></button>;
}

ModalOpenButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
  modalBody: PropTypes.node.isRequired,
  modalHeader: PropTypes.string,
};
