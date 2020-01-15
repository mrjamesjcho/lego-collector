import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';

export default function Header(props) {
  return (
    <div className='headerContainer w-100 mb-3'>
      <div className='container d-flex align-items-center justify-content-between py-3 px-5'>
        <Link
          to={'/products'}
          className="headerLogoTitleContainer d-flex align-items-center" >
          <div className="headerLogo d-flex align-items-center mr-3">
            <img
              src="/images/lego-brick.png"
              alt="lego-logo"
              className="headerLogoImg" />
          </div>
          <h3 className='headerTitle m-0'>Lego Collector</h3>
        </Link>
        <Link to='/cart' >
          <div className='shoppingCartContainer d-flex align-items-center' >
            <img className="shoppingCartImage mr-2" src='/images/icon-my-bag.svg' />
            {`  ${props.numberOfItemsInCart}`}
          </div>
        </Link>
      </div>
    </div>
  );
}
