import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

Modal.setAppElement("#root");

interface Props { 
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

 const  ImageModal:React.FC<Props> = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <img
        src={imageUrl}
        alt="Modal"
        style={{ width: "auto", height: "100%" }}
      />
    </Modal>
  );
}

export default ImageModal;