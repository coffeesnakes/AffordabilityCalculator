import React from 'react';
import styled from 'styled-components';

const ChartContain = styled.div`
position: relative;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 200px;
max-width: 280px;
min-width: 280px;
margin: 0 20px;
flex-shrink: 0;
`;
const PaymentDisplay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
`;

const Chart = ({ state }) => {
  const { mortgageIns, principle, propertyTaxes, homeInsurance, payment } = state;

  const findFill = (input, total) => (input / total) * 100;
  const total = mortgageIns + principle + propertyTaxes + homeInsurance;

  const principleFill = findFill(principle, total);
  const mortgageInsFill = findFill(mortgageIns, total);
  const propertyFill = findFill(propertyTaxes, total);
  const homeInsuranceFill = findFill(homeInsurance, total);
  const propertyOffset = 100 - principleFill + 25;
  const homeOffset = propertyOffset - propertyFill;
  const mortOffset = homeOffset - homeInsuranceFill;

  return (
    <ChartContain>
      <PaymentDisplay>
        <h1>{`$${payment}`}</h1>
        <div>/month</div>
      </PaymentDisplay>
      <svg width="100%" height="100%" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="15.91549430918952"
          fill="none"
          stroke="rgb(5, 34, 134)"
          strokeWidth="3.8"
          strokeDasharray={`${principleFill} ${100 - principleFill}`}
          strokeDashoffset="25"
        />
        <circle
          cx="18"
          cy="18"
          r="15.91549430918952"
          fill="none"
          stroke="rgb(0, 173, 187)"
          strokeWidth="3.8"
          strokeDasharray={`${propertyFill} ${100 - propertyFill}`}
          strokeDashoffset={propertyOffset}
        />
        <circle
          cx="18"
          cy="18"
          r="15.91549430918952"
          fill="none"
          stroke="rgb(194, 213, 0)"
          strokeWidth="3.8"
          strokeDasharray={`${homeInsuranceFill} ${100 - homeInsuranceFill}`}
          strokeDashoffset={homeOffset}
        />
        <circle
          cx="18"
          cy="18"
          r="15.91549430918952"
          fill="none"
          stroke="rgb(206, 182, 255)"
          strokeWidth="3.8"
          strokeDasharray={`${mortgageInsFill} ${100 - mortgageInsFill}`}
          strokeDashoffset={mortOffset}
        />
        <circle cx="18" cy="18" r="15.91549430918952" fill="none" />
      </svg>
    </ChartContain>
  );
};

export default Chart;
