import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Wallet from "Components/Wallet";
import TxForm from "Components/TxForm";

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

const Title = styled.h1`
  color: ${props => props.theme.titleColor};
`;

const Loading = () => (
  <LoadingContainer>
    <Title>Loading</Title>
  </LoadingContainer>
);

const AppPresenter = ({
  isLoading,
  balance = 0,
  address = "",
  mine,
  showingNotif,
  mining
}) => (
  <AppContainer>
    {isLoading ? (
      <Loading />
    ) : (
      <Fragment>
        <Wallet
          balance={balance}
          address={address}
          mine={mine}
          showingNotif={showingNotif}
          mining={mining}
        />
        <TxForm balance={balance} />
      </Fragment>
    )}
  </AppContainer>
);

AppPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  balance: PropTypes.number,
  address: PropTypes.string,
  mine: PropTypes.func.isRequired,
  showingNotif: PropTypes.bool.isRequired,
  mining: PropTypes.bool.isRequired
};

export default AppPresenter;
