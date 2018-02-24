import styled, { keyframes } from "styled-components";

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

export const Button = styled.button`
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

export const Notification = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: ${props => (props.success ? "#2ecc71" : "#e74c3c")};
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  animation: ${notifAnim} 2s linear forwards;
  box-shadow: ${props => props.theme.boxShadow};
`;
