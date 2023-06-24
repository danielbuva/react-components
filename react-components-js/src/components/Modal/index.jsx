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
        closeModal();
      }
    }
  };

  return (
    <ModalContext.Provider value={value}>
      <dialog id="modal" ref={modalRef} onClick={closeOnOutsideClick}>
        <div style={{ display: "flex" }} tabIndex={-1}>
          <CloseButton />
          <h2 id="modal-header">{modalHeader}</h2>
        </div>
        <div id="content">{content}</div>
      </dialog>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function CloseButton() {
  const { closeModal } = useModalContext();
  const handleClick = () => {
    closeModal();
  };
  return (
    <button className="close-button" onClick={handleClick}>
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

export function ShowModalButton({ onOpen, body, header, buttonText }) {
  const { showModal } = useModalContext();
  const handleClick = () => {
    if (onOpen) {
      onOpen();
    }
    showModal(body, header);
  };
  return <button onClick={handleClick}>{buttonText}</button>;
}

ShowModalButton.propTypes = {
  body: PropTypes.node.isRequired,
  header: PropTypes.string,
  onOpen: PropTypes.func,
  buttonText: PropTypes.string,
};
