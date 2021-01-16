import React from 'react';
import styled from 'styled-components';

import DownPayment from './DownPayment';
import HomePrice from './HomePrice';
import InterestRate from './InterestRate';

const ControlsContain = styled.div`
display: flex;
flex-flow: row nowrap;
width: 100%;
border: 1px solid black;
`;

const Controls = ({ homePrice }) => (
  <ControlsContain>
    <HomePrice homePrice={homePrice} />
    <DownPayment />
    <InterestRate />
  </ControlsContain>
);

export default Controls;
