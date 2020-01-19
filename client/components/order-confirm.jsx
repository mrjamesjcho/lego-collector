import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function OrderConfirm(props) {
  function renderOrderItems() {
    var elements = null;
    elements = props.OrderItems.map(item => {
      return (
        <CartSummaryItem
          key={item.id}
          item={item}
          onUpdateCartItem={this.props.onUpdateCartItem}
          onDeleteCartItem={this.handleDeleteCartItem} />
      );
    });
    return elements;
  }

  return (
    <div className="orderContainer container mb-5">
      <h1>Thank you for your order!</h1>
      <h5 className="orderHeader ml-3">Your Order:</h5>
      <div className="orderItems d-flex-column border-top">
        {renderOrderItems()}
      </div>
    </div>
  );
}
