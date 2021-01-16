import React from 'react';
import styled from 'styled-components';

const InterestRateContain = styled.div`
flex: 1;
  display: flex;
  flex-flow: column nowrap;
  border-style: solid;
  border-color: transparent;
  border-width: 15px 8px 0px;
`;

const TopContain = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;

input {
  width: 75px;
}
`;

const InterestRate = () => (
  <InterestRateContain>
    <TopContain>
      <h4>Interest Rate</h4>
      <input type="text" className="money-input"></input>
    </TopContain>
  </InterestRateContain>
);

export default InterestRate;
