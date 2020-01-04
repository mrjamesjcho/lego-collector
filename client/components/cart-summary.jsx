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
            id={item.id}
            item={item}
            itemImage={item.images}
            itemName={item.name}
            itemPrice={item.price}
            itemDescription={item.shortDescription}
            itemQuantity={item.count}
            onUpdateCartItem={this.props.onUpdateCartItem}
            onDeleteCartItem={this.props.onDeleteCartItem} />
        );
      });
    }
    return (
      <div className="cart-summary-container container col-lg-8 align-self-center mb-5">
        <div className="row px-4 pb-2 back-to-catalog-container">
          <Link to='/products' className='back-to-catalog'>&lt; <u>continue shopping</u></Link>
        </div>
        <h1 className="cart-summary-header container">Shopping Cart</h1>
        <div className="cart-summary-items container d-flex-column">
          {cartItemElements}
        </div>
        <div className="cart-total-checkout-container container d-flex">
          <h1 className="cart-total my-auto">Item Total: {'$' + (itemTotal / 100)}</h1>
          <button className="cart-checkout btn btn-primary ml-auto">Checkout</button>
        </div>
      </div>
    );
  }
}
