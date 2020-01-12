import React from 'react';
import './styles/delete-confirm.css';

export default function DeleteConfirm(props) {
  if (!props.item) {
    return;
  }
  return (
    <div className="deleteConfirmBackground justify-content-center align-items-center position-absolute h-100 w-100">
      <div className="deleteConfirmContainer container col-4 border">
        <div className="deleteConfirmImgContainer">
          <img
            className="deleteConfirmImg"
            src={props.item.images}
            alt={props.item.name} />
        </div>
        <div>Remove item from cart?</div>
      </div>
    </div>
  );
}
