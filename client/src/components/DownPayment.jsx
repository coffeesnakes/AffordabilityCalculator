import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

const DownPaymentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: space-between;
  border-style: solid;
  border-color: transparent;
  border-width: 15px 8px 0px;
}
`;

const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-width: 15px 8px 0px;
  h4 {
    padding: 0;
    margin: 0;
    line-height: 20px;
  }
  @media (max-width: 924px) {
    margin-bottom: 19px;
  }
`;

const InputContainer = styled.div`
  min-width: 156px;
  .money-input {
    width: 100px;
    border-width: 1px 0px 1px 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgb(205, 209, 212);
    border-bottom-color: rgb(205, 209, 212);
    border-left-color: rgb(205, 209, 212);
    border-image: initial;
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 8px 0px 0px 8px;
    border-right-style: initial;
    border-right-color: initial;
    &:focus {
      position: relative;
      border-right: 1px solid rgb(0, 173, 187);
    }
  }
  .percent-input {
    width: 56px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 0px 8px 8px 0px;
  }
`;

const DownPayment = ({
  homePrice,
  state,
  downPayment,
  handleDownPaymentChange,
  handlePercentDownChange,
}) => {
  const [value, setValue] = useState(downPayment);
  const [max, setMax] = useState(0);
  const formatDownPayment = numeral(downPayment).format("0,0");
  const formatDownPercent = Math.floor(state.percentDown * 100);

  const handleChange = (event) => {
    let targetVal = event.target.value;

    if (targetVal[0] === "$") {
      const pureVal = targetVal.slice(1);
      targetVal = numeral(pureVal).value();
    }
    event.target.style.setProperty(
      '--webkitProgressPercent',
      `${(targetVal / max) * 100 - 4}%`,
    );
    setValue(targetVal);
    handleDownPaymentChange(targetVal);
  };

  const handlePercent = (event) => {
    let val = event.target.value.replace('%', '');

    if (val === null) {
      val = '';
    }
    handlePercentDownChange(val);
  };

  useEffect(() => {
    setMax(downPayment * 1.5);
  }, []);

  return (
    <DownPaymentContainer>
      <TopContainer>
        <h4>Down Payment</h4>
        <InputContainer>
          <input
            type="text"
            className="money-input"
            value={`$${formatDownPayment}`}
            onChange={handleChange}
          />
          <input
            type="text"
            className="percent-input"
            value={`${formatDownPercent}%`}
            onChange={handlePercent}
          />
        </InputContainer>
      </TopContainer>
      <input
        className="range"
        type="range"
        min="0"
        max={max}
        step="10"
        value={value}
        onChange={handleChange}
      />
    </DownPaymentContainer>
  );
};
export default DownPayment;
