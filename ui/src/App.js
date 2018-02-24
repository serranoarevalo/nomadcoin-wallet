import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";
import axios from "axios";
import typography from "./typography";
import Wallet, { Title } from "./Wallet";

const baseStyles = () => injectGlobal`
  ${reset};
  ${typography};
  h1,h2,h3,h4{
    margin-bottom:0!important;
  }
`;

const AppContainer = styled.div`
  background-color: #f2f6fa;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Loading = () => (
  <LoadingContainer>
    <Title>Loading</Title>
  </LoadingContainer>
);

class App extends Component {
  state = {
    isLoading: true,
    port: window.sharedPort,
    mining: false
  };
  componentDidMount = () => {
    const { port } = this.state;
    this._getAddress(port);
    this._getBalanace(port);
    this.setState({
      isLoading: false
    });
  };
  render() {
    baseStyles();
    const { isLoading } = this.state;
    return (
      <AppContainer>
        {isLoading ? <Loading /> : <Wallet {...this.state} mine={this._mine} />}
      </AppContainer>
    );
  }
  _getAddress = async port => {
    const request = await axios.get(`http://localhost:${port}/me/address`);
    const { address } = request.data;
    this.setState({
      address
    });
  };
  _getBalanace = async port => {
    const request = await axios.get(`http://localhost:${port}/me/balance`);
    const { balance } = request.data;
    this.setState({
      balance
    });
  };
  _mine = async () => {
    const { port } = this.state;
    this.setState({
      mining: true
    });
    const request = await axios.post(`http://localhost:${port}/mine`);
    this.setState({
      mining: false
    });
  };
}

export default App;
