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
    this.handleBackToCatalog = this.handleBackToCatalog.bind(this);
    this.handleDeleteCartItem = this.handleDeleteCartItem.bind(this);
  }
  handleBackToCatalog() {
    this.props.onBackToCatalog('catalog', {});
  }
  handleDeleteCartItem(cartItem) {
    this.setState({
      itemToRemove: cartItem
    });
  }
  renderCartItems() {
    var elements = null;
    if (this.props.cartItems.length === 0) {
      elements = 'Your cart is empty';
    } else {
      elements = this.props.cartItems.map(item => {
        return (
          <CartSummaryItem
            key={item.id}
            item={item}
            onUpdateCartItem={this.props.onUpdateCartItem}
            onDeleteCartItem={this.props.onDeleteCartItem} />
        );
      });
    }
    return elements;
  }
  render() {
    return (
      <div className="cartContainer container mb-5">
        <div className="continueShoppingContainer pb-2">
          <Link to='/products' className='continueShoppingLink'>
            &lt; <span className="continueShopping">continue shopping</span>
          </Link>
        </div>
        <h1 className="cartHeader">My Cart</h1>
        <div className="cartItems d-flex-column border-top">
          {this.renderCartItems()}
        </div>
        <div className="cartTotalCheckoutContainer d-flex">
          <h1 className="cartTotal my-auto">Item Total: {'$' + (this.props.cartTotal / 100)}</h1>
          <Link
            to='/checkout'
            className='ml-auto' >
            <button className="checkoutBtn btn btn-warning">Proceed to checkout</button>
          </Link>
        </div>
        <DeleteConfirm cartItem={this.state.itemToRemove} onDeleteCartItem={this.props.onDeleteCartItem} />
      </div>
    );
  }
}
