import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import RangeSlider from './RangeSlider';

const DownPaymentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
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
`;

const InputContainer = styled.div`
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
  const [fill, setFill] = useState(75);
  const [max, setMax] = useState(0);
  const formatDownPayment = numeral(downPayment).format("0,0");
  const formatDownPercent = Math.floor(state.percentDown * 100);

  const styles = {
    background: `linear-gradient(to right,
      rgb(0, 120, 130) 0%,
      rgb(0, 120, 130) ${fill}%,
      rgb(205, 209, 212) ${fill}%,
      rgb(205, 209, 212) 100%)`,
  };

  const handleChange = (e) => {
    let targetVal = e.target.value;

    if (targetVal[0] === "$") {
      const pureVal = targetVal.slice(1);
      targetVal = numeral(pureVal).value();
    }

    setValue(targetVal);
    setFill((targetVal / max) * 100);
    handleDownPaymentChange(targetVal);
  };

  const handlePercent = (e) => {
    let val = e.target.value.replace("%", "");

    if (val === null) {
      val = "";
    }
    console.log(val);
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
        style={styles}
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
