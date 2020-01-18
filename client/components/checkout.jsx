/*eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/checkout.css';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.state = {
      name: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      cc: '',
      month: '',
      year: '',
      cvv: '',
      checkbox: false,
      nameValid: true,
      phoneValid: true,
      emailValid: true,
      address1Valid: true,
      cityValid: true,
      stateValid: true,
      zipValid: true,
      ccValid: true,
      monthValid: true,
      yearValid: true,
      cvvValid: true,
      checkboxValid: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      [`${name}Valid`]: this.validate(name, value)
    });
  }
  validate(field, value) {
    let isValid = false;
    switch (field) {
      case 'name':
      case 'city':
      case 'state':
      case 'month':
      case 'year':
        isValid = value.length > 0;
        break;
      case 'phone':
        isValid = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        break;
      case 'email':
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'address1':
        isValid = value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/);
        break;
      case 'zip':
        isValid = value.length === 5;
        break;
      case 'cc':
        isValid = value.length === 16;
        break;
      case 'cvv':
        isValid = value.length === 3 || value.length === 4;
        break;
      case 'checkbox':
        isValid = value;
        break;
      default:
        break;
    }
    return isValid;
  }
  renderStateOptions() {
    const elements = [];
    elements.push(
      <option key={0} defaultValue></option>
    );
    for (let stateIndex = 0; stateIndex < 50; stateIndex++) {
      elements.push(
        <option key={stateIndex + 1}>{this.states[stateIndex]}</option>
      );
    }
    return elements;
  }
  renderMonthOptions() {
    const elements = [];
    elements.push(
      <option key={0} defaultValue></option>
    );
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      elements.push(
        <option key={monthIndex + 1} >{this.months[monthIndex]}</option>
      );
    }
    return elements;
  }
  renderYearOptions() {
    const date = new Date();
    const year = date.getFullYear();
    const elements = [];
    elements.push(
      <option key={0} defaultValue></option>
    );
    for (let yearOption = year; yearOption < year + 10; yearOption++) {
      elements.push(
        <option key={yearOption} >{yearOption}</option>
      );
    }
    return elements;
  }
  renderCartItems() {
    const elements = [];
    this.props.cartItems.map(item => {
      elements.push(
        <div key={item.id} className="checkoutCartItem d-flex p-3 border-top">
          <div className="checkoutCartItemImgContainer d-flex justify-content-center">
            <img className="checkoutCartItemImg" src={item.images} alt={item.name} />
          </div>
          <div className="ml-3">
            <div className="checkoutCartItemName">
              {item.name}
            </div>
            <div className="checkoutCartItemQty">
              {`Quantity: ${item.count}`}
            </div>
          </div>
        </div>
      );
    });
    elements.push(
      <div key={0} className="border-top d-flex justify-content-between border-bottom px-4 py-3">
        <div>
          Order total:
        </div>
        <div>
          {`$${this.props.cartTotal / 100}`}
        </div>
      </div>
    );
    return elements;
  }
  render() {
    return (
      <div className = "checkoutContainer container mb-5" >
        <div className="continueShoppingContainer pb-2 ml-3">
          <Link to='/products' className='continueShoppingLink'>
          &lt; <span className="continueShopping">continue shopping</span>
          </Link>
        </div>
        <h1 className="cartHeader ml-3">My Cart</h1>
        <div className="checkoutFormCartContainer d-flex">
          <div className="checkoutFormContainer col-sm-8 p-0">
            <form>
              <div className="border-top p-3">
                <h5 className="mb-3">Billing and Shipping Address</h5>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="inputName">Full Name</label>
                    <input
                      id="checkoutName"
                      name="name"
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      full name required
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-4 col-md-5">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                      id="inputPhone"
                      name="phone"
                      type="text"
                      className={`form-control ${this.state.phoneValid ? '' : 'is-invalid'}`}
                      value={this.state.phone}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      valid phone number required
                    </div>
                  </div>
                  <div className="form-group col-lg-8 col-md-7">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      id="inputEmail"
                      name="email"
                      type="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      valid email required
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    id="inputAddress"
                    name="address1"
                    type="text"
                    className="form-control"
                    value={this.state.address1}
                    onChange={this.handleInputChange} />
                  <div className="invalid-feedback">
                    valid address required
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    id="inputAddress2"
                    name="address2"
                    type="text"
                    className="form-control"
                    value={this.state.address2}
                    onChange={this.handleInputChange} />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      id="inputCity"
                      type="text"
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      valid city required
                    </div>
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select
                      id="inputState"
                      name="state"
                      className="form-control"
                      value={this.state.state}
                      onChange={this.handleInputChange} >
                      {this.renderStateOptions()}
                    </select>
                    <div className="invalid-feedback">
                      please select state
                    </div>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input
                      id="inputZip"
                      name="zip"
                      type="number"
                      className="form-control"
                      value={this.state.zip}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      valid zip code required
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-top p-3">
                <h5>Payment Details</h5>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCreditCard">Credit Card Number</label>
                    <input
                      id="inputCreditCard"
                      name="cc"
                      type="number"
                      className="form-control"
                      value={this.state.cc}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      valid credit card required
                    </div>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputCreditCardMonth">Month</label>
                    <select
                      id="inputCreditCardMonth"
                      name="month"
                      className="form-control"
                      value={this.state.month}
                      onChange={this.handleInputChange} >
                      {this.renderMonthOptions()}
                    </select>
                    <div className="invalid-feedback">
                      please select month
                    </div>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputCreditCardYear">Year</label>
                    <select
                      id="inputCreditCardYear"
                      name="year"
                      type="number"
                      className="form-control"
                      value={this.state.year}
                      onChange={this.handleInputChange} >
                      {this.renderYearOptions()}
                    </select>
                    <div className="invalid-feedback">
                      please select year
                    </div>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputCreditCardCvv">CVV</label>
                    <input
                      id="inputCreditCardCvv"
                      name="cvv"
                      type="number"
                      className="form-control"
                      value={this.state.cvv}
                      onChange={this.handleInputChange} />
                    <div className="invalid-feedback">
                      valid cvv required
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-top p-3">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      id="gridCheck"
                      name="checkbox"
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.checkbox}
                      value={this.state.checkbox}
                      onChange={this.handleInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I accept that this website is for demonstration purposes, that no payment processing will be done, and that personal information such as names, addresses, or real credit card numbers should not be used on submission of this form.
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={() => this.props.onPlaceOrder(this.state)} >
                  Place your order
                </button>
              </div>

            </form>
          </div>
          <div className="checkoutCartContainer col-4">
            {this.renderCartItems()}
          </div>
        </div>
      </div >
    );
  }
}
