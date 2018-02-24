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
    amount: "",
    hasNotif: false
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
    this.setState({
      address: value
    });
  };
  _handleAmount = event => {
    const { balance } = this.props;
    const { target: { value } } = event;
    let nValue = Number(value);
    this.setState({
      amount: nValue,
      hasError: nValue > balance,
      error:
        nValue > balance
          ? `You can't send ${nValue} NMD if you only have ${balance} NMD in your account`
          : " "
    });
  };
  _submitForm = async () => {
    const { balance } = this.props;
    const { port, amount, address } = this.state;
    this.setState({
      hasNotif: false,
      successNotif: false,
      dangerNotif: false
    });
    if (amount && address) {
      if (amount <= balance) {
        try {
          const request = await axios.post(
            `http://localhost:${port}/transactions`,
            { address, amount },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
          this.setState({
            address: "",
            amount: "",
            successNotif: true,
            hasNotif: true
          });
        } catch (e) {
          this.setState({
            dangerNotif: true,
            hasNotif: true
          });
        }
      }
    }
  };
}

export default TxFormContainer;
