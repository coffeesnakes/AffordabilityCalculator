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
// padding: 20px;
margin-top 30px;
`;

const Display = ({ homePrice }) => (
  <DisplayContain>
    <Chart />
    <CostBreakdown homePrice={homePrice} />
  </DisplayContain>
);

export default Display;
