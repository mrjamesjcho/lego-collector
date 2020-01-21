import React from 'react';
import { Link } from 'react-router-dom';

export default function AddCartConfirm(props) {
  return (
    <div className="addCartConfirmBackground d-flex justify-content-center align-items-center fixed-top h-100 w-100">
      <div className="addCartConfirmContainer d-flex flex-column col-lg-4 col-md-6 col-sm-8 bg-white p-3 border rounded mx-sm-0 mx-3">
        <div
          className="addCartConfirmClose position-absolute mt-1 mr-3"
          onClick={props.clearProductAdded} >
          &times;
        </div>
        <div className="text-center mb-2">
          Item added to cart
        </div>
        <h5 className="addCartConfirmItemName text-center">{props.product.name}</h5>
        <div className="addCartConfirmImgContainer d-flex p-3">
          <img
            className="addCartConfirmImg m-auto"
            src={`/images/${props.product.images[0]}`}
            alt={props.product.name} />
        </div>
        <div className="addCartConfirmButtons d-flex justify-content-center">
          <Link
            to='/products'
            className="btn btn-secondary d-flex justify-content-center align-items-center w-50 mr-1"
            onClick={props.clearProductAdded}>
            Continue shopping
          </Link>
          <Link
            to='/cart'
            className="btn btn-warning d-flex justify-content-center align-items-center w-50 ml-1"
            onClick={props.clearProductAdded} >
            View cart
          </Link>
        </div>
      </div>
    </div>
  );
}
