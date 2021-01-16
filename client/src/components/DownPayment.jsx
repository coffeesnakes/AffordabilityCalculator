import React from 'react';
import styled from 'styled-components';

const DownPaymentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  border-style: solid;
  border-color: transparent;
  border-width: 16px 8px 0px;
}
`;

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  .money-input {
    width: 100px;
    border-width: 1px 0px 1px 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgb(205, 209, 212);
    border-bottom-color: rgb(205, 209, 212);
    border-left-color: rgb(205, 209, 212);
    border-image: initial;
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 8px 0px 0px 8px;
    border-right-style: initial;
    border-right-color: initial;
    margin-right: -15px;
    &:focus {
      position: relative;
      border-right: 1px solid rgb(0, 173, 187);
    }
  }
  .percent-input {
    width: 56px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 0px 8px 8px 0px;
  }
`;

const DownPayment = () => (
  <DownPaymentContainer>
    <TopContainer>
      <h4>Down Payment</h4>
      <input type="text" className="money-input" value="$5000"></input>
      <input type="text" className="percent-input" value="20%"></input>
    </TopContainer>
  </DownPaymentContainer>
);

export default DownPayment;
