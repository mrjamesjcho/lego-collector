import React from 'react';
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
        return <CartSummaryItem
          key={item.id}
          itemImage={item.images}
          itemName={item.name}
          itemPrice={item.price}
          itemDescription={item.shortDescription}
          itemQuantity={item.count} />;
      });
    }
    return (
      <div className="cart-summary-container container col-8 align-self-center">
        <div className="row px-4 py-2 back-to-catalog-container">
          <a className='back-to-catalog' onClick={this.handleBackToCatalog} >&lt; <u>back to catalog</u></a>
        </div>
        <h1 className="cart-summary-header container">My Cart</h1>
        <div className="cart-summary-items container d-flex-column">
          {cartItemElements}
        </div>
        <h1 className="container mb-5 cart-summary-total">Item Total: {'$' + (itemTotal / 100)}</h1>
      </div>
    );

  }
}
