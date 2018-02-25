import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import {
  Card,
  Key,
  KeyName,
  Title,
  Button,
  Notification
} from "Components/Shared";
const { clipboard } = window.require("electron");

const Header = styled.div`
  margin: 50px 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = Key.withComponent("textarea").extend`
  appearance:none;
  border:0;
  font:inherit;
  width:100%;
`;

const WalletPresenter = ({ mining, mine, showingNotif, address, balance }) => (
  <Fragment>
    <Header>
      {showingNotif && (
        <Notification success>You just mined a block!</Notification>
      )}
      <Title>Nomadcoin Wallet</Title>
      <Button onClick={mine} disabled={mining}>
        {mining ? "Mining..." : "Mine"}
      </Button>
    </Header>
    <Card>
      <Key>
        <KeyName>Your address:</KeyName>{" "}
        <Input readOnly={true} value={address} />
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
