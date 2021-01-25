import React from 'react';
import styled from 'styled-components';
import Cost from './Cost';

const CostContain = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: space-between;
  padding: 16px 0px 16px 16px;

  @media (max-width: 767px) {
    padding: 16px;
    width: 100%;
  }
`;

const BtnContain = styled.div`
  margin-top: 40px;
  width: 300px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const OrContain = styled.div`
font-family: Cabin;
text-align: center;
color: rgb(59, 65, 68);
letter-spacing: -0.1px;
font-size: 16px;
line-height: 1.5;
box-sizing: border-box;
`;
const Btn = styled.a`
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s,
    border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-hight: 1.5;
  padding: 8px 16px;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 128, 130);
  border-color: transparent;

  &:hover {
    color: rgb(0, 128, 130);
    background-color: rgb(255, 255, 255);
    border-color: rgb(0, 120, 130);
  }
`;
const MortgageBtn = styled.a`
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s,
    border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-hight: 1.5;
  padding: 8px 16px;
  width: 100%;
  color: rgb(0, 128, 130);
  background-color: white;
  border-color: transparent;

  &:hover {
    color: rgb(0, 128, 130);
    background-color: rgb(255, 255, 255);
    border-color: transparent;
  }
`;

const CostBreakdown = ({ state, toggleModal }) => {
  const { mortgageIns, principle, propertyTaxes, homeInsurance } = state;
  return (
    <CostContain>
      <Cost
        color="rgb(5, 34, 134)"
        title="Principle & Interest"
        display={principle}
      />
      <Cost
        color="rgb(0, 173, 187)"
        title="Property Taxes"
        display={propertyTaxes}
      />
      <Cost
        color="rgb(194, 213, 0)"
        title="Home Insurance"
        display={homeInsurance}
      />
      <Cost
        color="rgb(206, 182, 255)"
        title="Mortgage ins. & other"
        display={mortgageIns}
      />
      <BtnContain>
        <Btn>Get Pre-Qualified</Btn>
        <OrContain>or</OrContain>
        <MortgageBtn onClick={toggleModal}>See Today's Mortgage Rates</MortgageBtn>
      </BtnContain>
    </CostContain>
  );
};

export default CostBreakdown;
