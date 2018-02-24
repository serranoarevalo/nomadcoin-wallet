import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Card, Key, KeyName, Title } from "Components/Shared";

const Header = styled.div`
  margin: 50px 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border: 0;
  width: 100px;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.titleColor};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all 0.1s linear;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
  &:active {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #f6f9fc;
    transform: translateY(1px);
  }
  &:disabled {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #f6f9fc;
    transform: none;
    cursor: progress;
    &:focus,
    &:active,
    &:hover {
      transform: none;
    }
  }
`;

const notifAnim = keyframes`
  0%{
    opacity:0;
    transform:translateX(-10px);
  }
  10%{
    opacity:1;
    transform:none;
  }
  90%{
      opacity:1
  }
  100%{
      opacity:0;
  }
`;

const Notification = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #2ecc71;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  animation: ${notifAnim} 2s linear forwards;
  box-shadow: ${props => props.theme.boxShadow};
`;

const WalletPresenter = ({ mining, mine, showingNotif, address, balance }) => (
  <Fragment>
    <Header>
      {showingNotif && <Notification>You just mined a block!</Notification>}
      <Title>Nomadcoin Wallet</Title>
      <Button onClick={mine} disabled={mining}>
        {mining ? "Mining..." : "Mine"}
      </Button>
    </Header>
    <Card>
      <Key>
        <KeyName>Your address:</KeyName> {address}
      </Key>
      <Key>
        <KeyName>Your balance:</KeyName> {balance} NMD
      </Key>
    </Card>
  </Fragment>
);

WalletPresenter.propTypes = {
  mining: PropTypes.bool.isRequired,
  mine: PropTypes.func.isRequired,
  showingNotif: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
};

export default WalletPresenter;