import React from 'react';
import './styles/delete-confirm.css';

export default function DeleteConfirm(props) {
  return (
    <div className="deleteConfirmBackground d-flex justify-content-center align-items-center fixed-top h-100 w-100">
      <div className="deleteConfirmContainer col-lg-4 col-md-6 col-sm-8 bg-white p-3 border rounded mx-sm-0 mx-3">
        <div
          className="deleteConfirmClose position-absolute mr-3"
          onClick={() => props.onCancelDeleteCartItem(null)} >
          &times;
        </div>
        <h5 className="deleteConfirmItemName text-center">{props.item.name}</h5>
        <div className="deleteConfirmImgContainer d-flex p-2">
          <img
            className="deleteConfirmImg m-auto"
            src={props.item.images}
            alt={props.item.name} />
        </div>
        <div className="text-center mb-2">
          Delete item from cart?
        </div>
        <div className="deleteConfirmButtons d-flex justify-content-center">
          <button
            className="btn btn-secondary w-50 mr-1"
            onClick={() => props.onCancelDeleteCartItem(null)}>
              Cancel
          </button>
          <button
            className="btn btn-warning w-50 ml-1"
            onClick={() => {
              props.onDeleteCartItem(props.item);
              props.onCancelDeleteCartItem(null);
            }} >
              Delete
          </button>
        </div>
      </div>
    </div>
  );
}
