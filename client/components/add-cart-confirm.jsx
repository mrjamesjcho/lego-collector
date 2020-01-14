import React from 'react';
import { Link } from 'react-router-dom';

export default function AddCartConfirm(props) {
  return (
    <div className="addCartConfirmBackground d-flex justify-content-center align-items-center fixed-top h-100 w-100">
      <div className="addCartConfirmContainer col-4 bg-white p-3 border rounded">
        <div className="text-center mb-2">
          Item added to cart
        </div>
        <h5 className="addCartConfirmItemName text-center">{props.product.name}</h5>
        <div className="addCartConfirmImgContainer d-flex p-3">
          <img
            className="addCartConfirmImg m-auto"
            src={props.product.images[0]}
            alt={props.product.name} />
        </div>
        <div className="addCartConfirmButtons d-flex justify-content-center">
          <button
            className="btn btn-secondary w-50 mr-1"
            onClick={() => {}}>
            Continue shopping
          </button>
          <Link
            to='/cart'
            className="btn btn-warning w-50 ml-1" >
            View cart
          </Link>
        </div>
      </div>
    </div>
  );
}
