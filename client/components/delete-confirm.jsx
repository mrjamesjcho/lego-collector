import React from 'react';
import './styles/delete-confirm.css';

export default function DeleteConfirm(props) {
  return (
    <div className={`${props.cartItem ? 'd-flex' : 'd-none'} delete-confirm-background justify-content-center align-items-center position-absolute h-100 w-100`}>
      <div className="delete-confirm-container container col-4 border">
        <div>Remove item from cart?</div>
      </div>
    </div>
  );
}
