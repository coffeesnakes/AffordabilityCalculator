import React from "react";
import styled from "styled-components";
import Lender from "./Lender.jsx";

const RatesContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d1d1d5;
  font-size: 12px;
  border-radius: 4px 4px 0 0;
  background-color: #FFF;
  margin-bottom
`;

const RatesHeader = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  padding: 20px;
  border-bottom: 1px solid #d1d1d5;
  font-size: 12px;
  font-weight: 400;
`;

const LowestRate = styled.div`
  background-color: #f74a27;
  color: #fff;
  padding: 4px 20px;
  position: absolute;
  top: 45px;
  left: 0;
`;

const LoanRates = ({ title, subTitle, lenders, type }) => (
  <RatesContainer>
    <LowestRate>Lowest APR ({subTitle})</LowestRate>
    <RatesHeader>{title}</RatesHeader>
    <Lender lender={lenders[0]} loan={lenders[0].offerings[0]} type={type} />
    <Lender lender={lenders[1]} loan={lenders[1].offerings[1]} type={type} />
  </RatesContainer>
);

export default LoanRates;
