import React from 'react';

export default function DeleteConfirm(props) {
  return (
    <div className="delete-confirm-background d-flex justify-content-center align-items-center position-absolute h-100 w-100">
      <div className="delete-confirm-container">
        <div>Remove item from cart?</div>
      </div>
    </div>
  );
}
