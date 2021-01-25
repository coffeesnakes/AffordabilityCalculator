import React from 'react';
import styled from 'styled-components';

import Chart from './Chart';
import CostBreakdown from './CostBreakdown';

const DisplayContain = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top 30px;

@media (max-width: 767px) {
  flex-flow: column nowrap;
  justify-content: space-between;
   align-items: center;


`;

const Display = ({ homePrice, state, toggleModal }) => (
  <DisplayContain>
    <Chart state={state} />
    <CostBreakdown homePrice={homePrice} state={state} toggleModal={toggleModal} />
  </DisplayContain>
);

export default Display;
