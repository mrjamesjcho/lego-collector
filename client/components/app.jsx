/*eslint-disable */

import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import Checkout from './checkout';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      featured: [],
      cart: [],
      cartTotal: null
    };
    this.addCartItem = this.addCartItem.bind(this);
    this.updateCartItem = this.updateCartItem.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(data => {
        console.log('products: ', data);
        const featured = data.filter(product => product.featured);
        this.setState({ products: data, featured: featured });
      });
  }

  getCartItems() {
    let cartTotal = 0;
    fetch('/api/cart.php')
      .then(request => request.json())
      .then(data => {
        console.log('cart: ', data);
        data.map(cartItem => {
          cartTotal += cartItem.count * cartItem.price;
        });
        this.setState({
          cart: data,
          cartTotal: cartTotal
        });
      });
  }

  getCartTotal(cart) {
    let cartTotal = 0;
    cart.map(cartItem => {
      cartTotal += cartItem.count * cartItem.price;
    });
    return cartTotal;
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
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
        const newCartTotal = this.getCartTotal(newCart);
        this.setState({
          cart: newCart,
          cartTotal: newCartTotal
        });
      });
  }

  updateCartItem(cartItem, incDec) {
    if (cartItem.count === 1 && incDec === -1) {
      return;
    }
    const data = {
      method: 'PATCH',
      body: JSON.stringify({
        id: cartItem.id,
        incDec: incDec
      }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/cart.php', data)
      .then(res => {})
      .then(data => {
        let newCartTotal = this.state.cartTotal;
        const newCart = this.state.cart.map(item => {
          if (item.id === cartItem.id) {
            item.count += incDec;
            newCartTotal += incDec * item.price;
          }
          return item;
        });
        this.setState({
          cart: newCart,
          cartTotal: newCartTotal
        });
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
        const newCartTotal = this.getCartTotal(newCart);
        this.setState({
          cart: newCart,
          cartTotal: newCartTotal
        });
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

  render() {
    return (
      <Router className='appContainer'>
        <Header numberOfItemsInCart={this.numOfItemsInCart()} />
        <Switch>
          <Route exact path="/">
            <Redirect to={'/products'} />
          </Route>
          <Route
            path="/products"
            render={props => <ProductList {...props} products={this.state.products} featured={this.state.featured} onAddCartItem={this.addCartItem} /> } />
          <Route
            path="/product/:id"
            render={props => <ProductDetails {...props} onAddCartItem={this.addCartItem} /> } />
          <Route
            path="/cart"
            render={props => <CartSummary {...props} cartItems={this.state.cart} cartTotal={this.state.cartTotal} onUpdateCartItem={this.updateCartItem} onDeleteCartItem={this.deleteCartItem} /> } />
          <Route
            path="/checkout"
            render={props => <Checkout {...props} cartItems={this.state.cart} cartTotal={this.state.cartTotal} /> } />
        </Switch>
      </Router>
    );
  }
}
