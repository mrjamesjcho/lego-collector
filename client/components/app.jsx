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
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }
  getCartItems() {
    fetch('api/cart.php')
      .then(request => request.json())
      .then(data => this.setState({
        view: this.state.view,
        cart: data }));
  }
  addToCart(product) {
    const data = {
      method: 'POST',
      body: JSON.stringify({ 'id': product.id }),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('api/cart.php', data)
      .then(response => {})
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
          product['count'] = 1;
          product['images'] = product['images'][0];
          newCart.push(product);
        }
        this.setState({
          view: this.state.view,
          cart: newCart
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
  componentDidMount() {
    this.getCartItems();
  }
  render() {
    return (
      <Router className='app-container'>
        <Header numberOfItemsInCart={this.numOfItemsInCart()} onViewCart={this.setView} />
        <Switch>
          <Route exact path="/">
            <Redirect to={'/products'} />
          </Route>
          <Route
            path="/products"
            render={props => <ProductList {...props} /> } />
          <Route
            path="/product/:id"
            render={props => <ProductDetails {...props} /> } />
          <Route
            path="/cart"
            render={props => <CartSummary {...props} /> } />
        </Switch>
      </Router>
    );
  }
}
