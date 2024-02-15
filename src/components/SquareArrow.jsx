import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SquareArrow.css';

export const SquareArrow = ({ direction, onClick }) => {
  const arrowClassName = `square-arrow square-arrow--${direction}`;

  return (
    <div className={arrowClassName} onClick={onClick}>
      {direction === 'prev' ? 
          <i className="fa-solid fa-angle-left"></i>
          : 
          <i className="fa-solid fa-angle-right"></i>
      }
    </div>
  );
};