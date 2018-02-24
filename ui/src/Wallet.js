import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => props.theme.titleColor};
`;

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

const Wallet = ({ mining, mine }) => (
  <Header>
    <Title>Nomadcoin Wallet</Title>
    <Button onClick={mine} disabled={mining}>
      {mining ? "Mining..." : "Mine"}
    </Button>
  </Header>
);

Wallet.propTypes = {
  mining: PropTypes.bool.isRequired,
  mine: PropTypes.func.isRequired
};

export default Wallet;
