import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const LenderContain = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #d1d1d5;
  font-weight: 200;
  transition: all 0.05s;
  cursor: pointer;
  &:hover {
    background-color: #f5f6f7;
  }
`;

const LenderInfo = styled.div`
  flex: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-left: 20px;
  color: #596b82;
  div {
    padding: 3px 0;
  }
`;

const Quotes = styled.div`
  flex: 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  font-size: 11px;
  color: #596b82;
  margin-left: 10px;
  div {
    padding: 2px 0;
  }
`;

const Green = styled.span`
  color: #10a75f;
  cursor: pointer;
  font-weight: 100;
`;

const Arrow = styled.i`
  border: solid #10a75f;
  border-width: 2px 2px 0 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
`;

const ArrowContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  padding-right: 25px;
`;

const Tooltip = styled.span`
  cursor: help;
  border-bottom: 1px dashed #a7a6ab;
`;

const Lender = ({ loan, lender, type }) => {
  const ratingTotal = lender.reviews.reduce((i, review) => i + review.rating, 0);
  const ratingAvg = Math.floor(ratingTotal / lender.reviews.length);
  return (
  <LenderContain>
    <LenderInfo>
      <div>{`${type} fixed`}</div>
      <div><Green>{lender.name}</Green></div>
      <div>
        <Stars rating={ratingAvg} />
        {`${lender.reviews.length} Reviews`}
      </div>
    </LenderInfo>
    <Quotes>
        <div><span className="bold">{`${loan.apr} %`}</span> APR</div>
        <div><span className="bold">{`${loan.rate} %`}</span> RATE</div>
      <div>
        <span className="bold">
          {`$${loan.fees}`}
        </span>
        <Tooltip>LENDER FEES</Tooltip>
      </div>
    </Quotes>
    <ArrowContainer>
      <Arrow />
    </ArrowContainer>
  </LenderContain>
  );
};

export default Lender;
