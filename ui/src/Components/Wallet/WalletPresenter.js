import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Card, Key, KeyName, Title, Button } from "Components/Shared";

const Header = styled.div`
  margin: 50px 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
