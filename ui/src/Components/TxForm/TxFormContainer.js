import React, { Component } from "react";
import PropTypes from "prop-types";
import TxFormPresenter from "./TxFormPresenter";

class TxFormContainer extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired
  };
  render() {
    return (
      <TxFormPresenter
        handleSubmit={this._handleSubmit}
        {...this.state}
        handleInput={this._handleInput}
      />
    );
  }
  _handleSubmit = e => {
    e.preventDefault();
  };
  _handleInput = event => {
    const { balance } = this.props;
    const { target: { name, value } } = event;
    if (name === "amount") {
      if (value >= balance) {
        this.setState({
          hasError: true,
          error: `Can't send ${value}, you only have ${balance}`
        });
        return;
      }
    }
    this.setState({
      [name]: value,
      hasError: false
    });
  };
}

export default TxFormContainer;
