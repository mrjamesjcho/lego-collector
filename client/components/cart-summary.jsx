import React from 'react';
import { Link } from 'react-router-dom';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackToCatalog = this.handleBackToCatalog.bind(this);
  }
  handleBackToCatalog() {
    this.props.onBackToCatalog('catalog', {});
  }
  render() {
    var cartItemElements = null;
    var itemTotal = 0;
    if (this.props.cartItems.length === 0) {
      cartItemElements = 'Your cart is empty';
    } else {
      cartItemElements = this.props.cartItems.map(item => {
        itemTotal += item.price * item.count;
        return (
          <CartSummaryItem
            key={item.id}
            item={item}
            onUpdateCartItem={this.props.onUpdateCartItem}
            onDeleteCartItem={this.props.onDeleteCartItem} />
        );
      });
    }
    return (
      <div className="cartContainer container col-lg-8 align-self-center mb-5">
        <div className="continueShoppingContainer pb-2">
          <Link to='/products' className='continueShoppingLink'>
            &lt; <span className="continueShopping">continue shopping</span>
          </Link>
        </div>
        <h1 className="cartHeader">My Cart</h1>
        <div className="cartItems d-flex-column border-top">
          {cartItemElements}
        </div>
        <div className="cartTotalCheckoutContainer d-flex">
          <h1 className="cartTotal my-auto">Item Total: {'$' + (itemTotal / 100)}</h1>
          <Link
            to='/checkout'
            className='ml-auto' >
            <button className="checkoutBtn btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    );
  }
}
