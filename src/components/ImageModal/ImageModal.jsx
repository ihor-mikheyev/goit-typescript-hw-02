import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent", // Прозорий фон для вмісту модального вікна
    border: "none", // Без рамки
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Темний фон для оверлею
  },
};

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, imageUrl}) {
return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // Закриття при натисканні на ESC або за межами модального вікна
      style={customStyles}
    >
    <img src={imageUrl} alt="Modal" style={{ width: 'auto', height: '100%' }} />
                {/* <div>
                <p>{item.description}</p>
                <span>Autor: { item.user.name}</span>
                <span>Likes: {item.likes}</span>
            </div> */}
    </Modal>
  );
}

// Initialize the root only once
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// Render the component initially
// root.render(<ImageModal />);