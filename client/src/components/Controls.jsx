import React from 'react';
import styled from 'styled-components';

import DownPayment from './DownPayment';
import HomePrice from './HomePrice';
import InterestRate from './InterestRate';
import LoanType from './LoanType';

const ControlsContain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: ;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 0px 16px 16px 16px;
  margin-top: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const Controls = ({
  homePrice, handlePriceChange, handleDownPaymentChange, handlePercentDownChange,
  state, downPayment, interestRate, handleInterestChange,
}) => (
  <ControlsContain>
    <HomePrice homePrice={homePrice} handlePriceChange={handlePriceChange} />
    <DownPayment
      homePrice={homePrice}
      state={state}
      downPayment={downPayment}
      handleDownPaymentChange={handleDownPaymentChange}
      handlePercentDownChange={handlePercentDownChange}
    />
    <InterestRate
      homePrice={homePrice}
      interestRate={interestRate}
      handleInterestChange={handleInterestChange}
    />
    <LoanType />
  </ControlsContain>
);

export default Controls;
