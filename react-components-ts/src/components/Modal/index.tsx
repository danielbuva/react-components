import X from "./assets/X.svg";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";
import "./Modal.css";
import { useModalContext } from "../../hooks/useModalContext";

export const ModalContext = createContext<{
  closeModal: () => void;
  showModal: (content: ReactNode, modalHeader?: string) => void;
  setOnClose: Dispatch<SetStateAction<(() => void) | null>>;
  setModalHeader: Dispatch<SetStateAction<string>>;
} | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [onClose, setOnClose] = useState<(() => void) | null>(null);
  const [modalHeader, setModalHeader] = useState("");
  const modalRef = useRef<HTMLDialogElement>(null);

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

  const showModal = (content: ReactNode, modalHeader?: string) => {
    setContent(content);
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

  const closeOnOutsideClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
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

function CloseButton({ onClose }: { onClose: () => void }) {
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

export const ShowModalButton = ({
  body,
  buttonText,
  header,
  onOpen,
}: {
  body: ReactNode;
  buttonText: string;
  header: string;
  onOpen?: () => void;
}) => {
  const { showModal } = useModalContext();
  const handleClick = () => {
    if (onOpen) {
      onOpen();
    }
    showModal(body, header);
  };
  return <button onClick={handleClick}>{buttonText}</button>;
};
