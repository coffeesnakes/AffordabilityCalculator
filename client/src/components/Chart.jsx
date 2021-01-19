import React from 'react';
import styled from 'styled-components';

const ChartContain = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 200px;
margin: 0 20px;

svg {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
svg circle {
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: rgb(5, 34, 134);
  stroke-width: 30;
  stroke-linecap: round;
  transform: translate(20px, 20px);
}
`;

const Chart = () => (
  <ChartContain>
    <svg>
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(5, 34, 134)" stroke-width="3.8" stroke-dasharray="85 15" stroke-dashoffset="25" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(0, 173, 187)" stroke-width="3.8" stroke-dasharray="8 92" stroke-dashoffset="40" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(194, 213, 0)" stroke-width="3.8" stroke-dasharray="5 95" stroke-dashoffset="32" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" stroke="rgb(206, 182, 255)" stroke-width="3.8" stroke-dasharray="2 98" stroke-dashoffset="27" />
      <circle cx="18" cy="18" r="15.91549430918952" fill="none" />
    </svg>
  </ChartContain>
);

export default Chart;
