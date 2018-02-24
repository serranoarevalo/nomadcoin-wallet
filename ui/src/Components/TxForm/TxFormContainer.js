import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TxFormPresenter from "./TxFormPresenter";

class TxFormContainer extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired
  };
  state = {
    port: window.sharedPort,
    address: "",
    amount: ""
  };
  render() {
    return (
      <TxFormPresenter
        handleSubmit={this._handleSubmit}
        {...this.state}
        handleAddress={this._handleAddress}
        handleAmount={this._handleAmount}
      />
    );
  }
  _handleSubmit = e => {
    e.preventDefault();
    this._submitForm();
  };
  _handleAddress = event => {
    const { target: { value } } = event;
    console.log(value);
    this.setState({
      address: value,
      hasError: false
    });
  };
  _handleAmount = event => {
    const { balance } = this.props;
    const { target: { value } } = event;
    let nValue = Number(value);
    this.setState({
      amount: nValue,
      hasError: nValue > balance,
      error: `You can't send ${nValue} if you only have ${balance} NMD in your account`
    });
  };
  _submitForm = async () => {
    const { balance } = this.props;
    const { port, amount, address } = this.state;
    if (amount <= balance) {
      //   const request = await axios.post(`http://localhost:${port}/transaction`, {
      //     method: "POST",
      //     body: JSON.stringify({ address, amount }),
      //     headers: { "Content-Type": "application/json" }
      //   });
      console.log(amount, address);
    }
  };
}

export default TxFormContainer;
