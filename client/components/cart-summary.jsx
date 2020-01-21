import React from 'react';
import { Link } from 'react-router-dom';
import CartSummaryItem from './cart-summary-item';
import './styles/cart.css';
import DeleteConfirm from './delete-confirm';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemToRemove: null
    };
    this.handleDeleteCartItem = this.handleDeleteCartItem.bind(this);
  }

  handleDeleteCartItem(cartItem) {
    this.setState({
      itemToRemove: cartItem
    });
  }
  renderCartItems() {
    var elements = null;
    if (this.props.cartItems.length === 0) {
      elements = <h5 className="ml-3 mt-2">Your cart is empty</h5>;
    } else {
      elements = this.props.cartItems.map(item => {
        return (
          <CartSummaryItem
            key={item.id}
            item={item}
            onUpdateCartItem={this.props.onUpdateCartItem}
            onDeleteCartItem={this.handleDeleteCartItem} />
        );
      });
    }
    return elements;
  }
  renderDeleteConfirmModal() {
    if (this.state.itemToRemove) {
      return (
        <DeleteConfirm
          item={this.state.itemToRemove}
          onCancelDeleteCartItem={this.handleDeleteCartItem}
          onDeleteCartItem={this.props.onDeleteCartItem} />
      );
    }
  }
  render() {
    return (
      <div className="cartContainer container mb-5">
        <div className="continueShoppingContainer pb-2 ml-3">
          <Link to='/products' className='continueShoppingLink'>
            &lt; <span className="continueShopping">continue shopping</span>
          </Link>
        </div>
        <h1 className="cartHeader ml-3">My Cart</h1>
        <div className="cartItems d-flex-column border-top">
          {this.renderCartItems()}
        </div>
        <div className="cartTotalCheckoutContainer d-flex">
          <h5 className="cartTotal my-auto ml-3">Item Total: {'$' + (this.props.cartTotal / 100)}</h5>
          <Link
            to='/checkout'
            className='ml-auto' >
            <button className="checkoutBtn btn btn-warning">Proceed to checkout</button>
          </Link>
        </div>
        {this.renderDeleteConfirmModal()}
      </div>
    );
  }
}
