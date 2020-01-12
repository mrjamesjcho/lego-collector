import React from 'react';
import './styles/delete-confirm.css';

export default function DeleteConfirm(props) {
  if (!props.item) {
    return;
  }
  return (
    <div className="deleteConfirmBackground d-flex justify-content-center align-items-center position-absolute h-100 w-100">
      <div className="deleteConfirmContainer container col-4 bg-white p-3 border rounded">
        <h5 className="deleteConfirmItemName text-center">{props.item.name}</h5>
        <div className="deleteConfirmImgContainer d-flex p-2">
          <img
            className="deleteConfirmImg m-auto"
            src={props.item.images}
            alt={props.item.name} />
        </div>
        <div className="text-center">
          Remove item from cart?
        </div>
      </div>
    </div>
  );
}
