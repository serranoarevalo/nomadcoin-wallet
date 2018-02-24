import styled from "styled-components";

export const Card = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  background-color: white;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.titleColor};
`;

export const Key = styled.h3`
  color: ${props => props.theme.titleColor};
  margin-bottom: 20px !important;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const KeyName = styled.span`
  color: #999;
`;
