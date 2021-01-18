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
  width: 100%;
  border: 1px solid black;
`;

const Controls = ({ homePrice }) => (
  <ControlsContain>
    <HomePrice homePrice={homePrice} />
    <DownPayment homePrice={homePrice} />
    <InterestRate homePrice={homePrice} />
    <LoanType />
  </ControlsContain>
);

export default Controls;
