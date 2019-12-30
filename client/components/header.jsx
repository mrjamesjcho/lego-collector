import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onViewCart('cart', {});
  }
  render() {
    return (
      <div className='headerContainer d-flex mb-3'>
        <div className='container d-flex py-3 px-5 w-100 align-items-center justify-content-between'>
          <Link to={'/products'}>
            <h1 className='header-name'>Lego Collector</h1>
          </Link>
          <h5 className='shopping-cart-container d-flex align-items-center' onClick={this.handleClick}>
            <img className="shoppingCartImage mr-2" src='images/shopping.png'/>
            {`  ${this.props.numberOfItemsInCart}`}
          </h5>
        </div>
      </div>
    );
  }
}
