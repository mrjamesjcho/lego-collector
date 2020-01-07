import React from 'react';
import { Link } from 'react-router-dom';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    this.state = {
      name: '',
      phone: null,
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      cc: null,
      month: null,
      year: null,
      cvv: null,
      checkbox: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {

  }
  render() {
    return (
      < div className = "cartContainer container col-lg-8 align-self-center mb-5" >
        <div className="continueShoppingContainer pb-2">
          <Link to='/products' className='continueShoppingLink'>
          &lt; <span className="continueShopping">continue shopping</span>
          </Link>
        </div>
        <h1 className="cartHeader">My Cart</h1>
        <form className="col-sm-8 border py-3">
          <h5 className="mb-3">Billing and Shipping Address</h5>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="inputName">Full Name</label>
              <input type="text" className="form-control" id="checkoutName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputPhone">Phone</label>
              <input type="number" className="form-control" id="inputPhone" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option defaultValue></option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <h5>Payment Details</h5>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCreditCard">Credit Card Number</label>
              <input type="number" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputCreditCardMonth">Month</label>
              <select id="inputCreditCardMonth" className="form-control">
                <option defaultValue></option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputCreditCardYear">Year</label>
              <select id="inputCreditCardYear" className="form-control">
                <option defaultValue></option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputCreditCardCvv">CVV</label>
              <input type="number" className="form-control" id="inputCreditCardCvv" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                I accept that this website is for demonstration purposes, that no payment processing will be done, and that personal information such as names, addresses, or real credit card numbers should not be used on submission of this form.              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-warning">Place your order</button>
        </form>
      </div >
    );
  }
}