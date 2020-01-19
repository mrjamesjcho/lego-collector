import React from 'react';
import OrderSummaryItem from './order-summary-item';

export default function OrderSummary(props) {
  function renderOrderItems() {
    var elements = null;
    elements = props.orderItems.map(item => {
      return (
        <OrderSummaryItem
          key={item.id}
          item={item} />
      );
    });
    return elements;
  }

  return (
    <div className="orderContainer container mb-5">
      <h1 className="orderHeader ml-3">Thank you for your order!</h1>
      <h5 className="orderLabel ml-3">Your Order:</h5>
      <div className="orderItems d-flex-column border-top">
        {renderOrderItems()}
      </div>
      <h5 className="orderTotal">{`Total: $${props.orderTotal / 100}`}</h5>
    </div>
  );
}
