import React from 'react';
import './ModalVideo.css';

export const ModalVideo = ({ videoUrl, closeModal, dots, selectedVideoId }) => {

  const dotElements = Array.from({ length: dots }, (_, index) => (
    <span key={index} className={`dot ${index === selectedVideoId ? 'active' : ''}`}>
    </span>
  ));

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <iframe
          title="Vimeo Video"
          src={videoUrl}
          width="80%"
          height="90%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
          <div className="dots-container">
             {dotElements}
          </div>
      </div>
    </div>
  );
};