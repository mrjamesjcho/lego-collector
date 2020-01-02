/*eslint-disable */

import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
    this.addCartItem = this.addCartItem.bind(this);
    this.updateCartItem = this.updateCartItem.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(request => request.json())
      .then(data => {
        console.log('cart: ', data);
        this.setState({ cart: data });
      });
  }

  addCartItem(product) {
    const data = {
      method: 'POST',
      body: JSON.stringify({ 'id': product.id }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/cart.php', data)
      .then(res => {})
      .then(data => {
        var sameItemIndex = null;
        const newCart = this.state.cart.map((item, index) => {
          if (item.id === product.id) {
            item.count++;
            sameItemIndex = index;
          }
          return item;
        });
        if (sameItemIndex === null) {
          const newCartProduct = { ...product };
          newCartProduct.count = 1;
          newCartProduct.images = product.images[0];
          newCart.push(newCartProduct);
        }
        this.setState({ cart: newCart });
      });
  }

  updateCartItem(cartItem, incDec) {
    const data = {
      method: 'UPDATE',
      body: JSON.stringify({
        'id': cartItem.id,
        'incDec': incDec
      }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/cart.php', data)
      .then(res => {})
      .then(data => {
        const newCart = this.state.cart.map(item => {
          if (item.id === cartItem.id) {
            item.count += incDec;
          }
          return item;
        });
        this.setState({ cart: newCart });
      })
  }

  deleteCartItem(cartItem) {
    console.log('cartItem: ', cartItem);
    const data = {
      method: 'DELETE',
      body: JSON.stringify({ 'id': cartItem.id }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/cart.php', data)
      .then(res => {})
      .then(data => {
        const newCart = this.state.cart.filter(item => item.id !== cartItem.id);
        console.log('newCart: ', newCart);
        this.setState({ cart: newCart });
      });
  }

  numOfItemsInCart() {
    var numOfItems = 0;
    if (this.state.cart.length === 0) {
      return 0;
    }
    this.state.cart.map(item => { numOfItems += item.count; });
    return numOfItems;
  }
  componentDidMount() {
    this.getCartItems();
  }

  render() {
    return (
      <Router className='app-container'>
        <Header numberOfItemsInCart={this.numOfItemsInCart()} />
        <Switch>
          <Route exact path="/">
            <Redirect to={'/products'} />
          </Route>
          <Route
            path="/products"
            render={props => <ProductList {...props} onAddCartItem={this.addCartItem} /> } />
          <Route
            path="/product/:id"
            render={props => <ProductDetails {...props} onAddCartItem={this.addCartItem} /> } />
          <Route
            path="/cart"
            render={props => <CartSummary {...props} cartItems={this.state.cart} onUpdateCartItem={this.updateCartItem} onDeleteCartItem={this.deleteCartItem} /> } />
        </Switch>
      </Router>
    );
  }
}
