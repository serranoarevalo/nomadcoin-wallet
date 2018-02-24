import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import axios from "axios";
import typography from "../../typography";
import AppPresenter from "./AppPresenter";

const baseStyles = () => injectGlobal`
  ${reset};
  ${typography};
  h1,h2,h3,h4{
    margin-bottom:0!important;
  }
`;

class AppContainer extends Component {
  state = {
    isLoading: true,
    port: window.sharedPort,
    mining: false,
    showingNotif: false
  };
  componentDidMount = () => {
    const { port } = this.state;
    this._getAddress(port);
    this._getBalance(port);
    this.setState({
      isLoading: false
    });
    setInterval(() => {
      this._getBalance(port);
    }, 500);
  };
  render() {
    baseStyles();
    return <AppPresenter {...this.state} mine={this._mine} />;
  }
  _getAddress = async port => {
    const request = await axios.get(`http://localhost:${port}/me/address`);
    const { address } = request.data;
    this.setState({
      address
    });
  };
  _getBalance = async port => {
    const request = await axios.get(`http://localhost:${port}/me/balance`);
    const { balance } = request.data;
    this.setState({
      balance
    });
  };
  _mine = async () => {
    const { port } = this.state;
    this.setState({
      mining: true,
      showingNotif: false
    });
    await axios.post(`http://localhost:${port}/mine`);
    this.setState({
      mining: false,
      showingNotif: true
    });
  };
}

export default AppContainer;
