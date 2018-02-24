import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "styled-reset";

const baseStyles = () => injectGlobal`
  ${reset};
`;

console.log("shared port", window.sharedPort);

const AppContainer = styled.div`
  background-color: #f2f6fa;
  height: 100vh;
`;

class App extends Component {
  render() {
    baseStyles();
    return (
      <AppContainer>
        <div className="App" />
      </AppContainer>
    );
  }
}

export default App;
