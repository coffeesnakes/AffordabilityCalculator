import React from 'react';
import styled from 'styled-components';

const ChartContain = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
height: 300px;
width: 300px;

svg {
  position: relative;
  width: 90%;
  height: 90%;
  z-index: 1000;
}
svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #191919;
  stroke-width: 20;
  stroke-linecap: round;
  transform: translate(5px, 5px);
}
`;

const Chart = () => (
  <ChartContain>
    <svg>
      <circle cx="18" cy="18" r="16"></circle>
      <circle cx="18" cy="18" r="16"></circle>
    </svg>
  </ChartContain>
);

export default Chart;
