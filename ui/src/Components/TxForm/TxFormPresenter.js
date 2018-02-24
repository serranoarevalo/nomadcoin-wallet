import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, Key, Button } from "Components/Shared";

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
`;

const TxFormPresenter = ({
  handleSubmit,
  balance,
  amount,
  handleInput,
  hasError,
  error
}) => (
  <Card>
    <Key>Send NMD: </Key>
    <SendTxForm onSubmit={handleSubmit}>
      <Input
        placeholder={"Address"}
        required
        name="address"
        value={balance}
        onChange={handleInput}
      />
      <Input
        placeholder={"Amount"}
        required
        name="amount"
        type={"number"}
        min={0}
        value={amount}
        onChange={handleInput}
      />
      <Submit value={"Send"} type={"Submit"} readOnly disabled={hasError} />
    </SendTxForm>
  </Card>
);

TxFormPresenter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  error: PropTypes.string
};

export default TxFormPresenter;
