import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

export default function Header(props) {
  return (
    <div className='headerContainer w-100 mb-3'>
      <div className='container d-flex py-3 px-5 align-items-center justify-content-between'>
        <Link to={'/products'}>
          <h1 className='headerTitle'>Lego Collector</h1>
        </Link>
        <Link to='/cart' >
          <h5 className='shoppingCartContainer d-flex align-items-center' >
            <img className="shoppingCartImage mr-2" src='/images/shopping.png' />
            {`  ${props.numberOfItemsInCart}`}
          </h5>
        </Link>
      </div>
    </div>
  );
}
