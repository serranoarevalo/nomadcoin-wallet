import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, Key, Button, Notification } from "Components/Shared";

const SendTxForm = styled.form`
  margin-top: 25px;
`;

const Submit = Button.withComponent("input").extend`
  margin-right:10px;
  border: 2px solid ${props => props.theme.titleColor};
  box-shadow:none;
  &:hover{
      box-shadow:none;
      transform:none;
  }
  &:disabled{
      color:#999;
      border: 2px solid #999;
      cursor:not-allowed;
      box-shadow:none;
  }
`;

const Input = Submit.extend`
  width: 200px;
  padding-left: 10px;
  &:active {
    background-color: transparent;
  }
  color: ${props => (props.hasError ? "#e74c3c" : "inherit")};
  border-color: ${props => (props.hasError ? "#e74c3c" : "inherit")};
`;

const ErrorText = styled.span`
  margin: 10px 0;
  color: #e74c3c;
  font-weight: 600;
  display: block;
`;

const TxFormPresenter = ({
  handleSubmit,
  address,
  amount,
  handleAmount,
  handleAddress,
  hasError,
  error,
  hasNotif,
  dangerNotif,
  successNotif
}) => (
  <Card>
    <Key>Send NMD: </Key>
    <SendTxForm onSubmit={handleSubmit}>
      <Input
        placeholder={"Address"}
        required
        name="address"
        value={address}
        type={"text"}
        onChange={handleAddress}
      />
      <Input
        placeholder={"Amount"}
        required
        name="amount"
        type={"number"}
        value={amount || ""}
        onChange={handleAmount}
        hasError={hasError}
      />
      <Submit
        value={"Send"}
        type={"submit"}
        readOnly
        disabled={hasError || (!address || !amount)}
      />
    </SendTxForm>
    <ErrorText>{error}</ErrorText>
    {hasNotif &&
      dangerNotif && (
        <Notification>
          Something wrong with the transaction, check and try again
        </Notification>
      )}
    {hasNotif &&
      successNotif && (
        <Notification success>
          Transaction added to pool, waiting for confirmation!
        </Notification>
      )}
  </Card>
);

TxFormPresenter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleAmount: PropTypes.func.isRequired,
  handleAddress: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  error: PropTypes.string
};

export default TxFormPresenter;
