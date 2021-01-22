import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import RangeSlider from './RangeSlider';

const InterestRateContain = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: space-between;
  border-style: solid;
  border-color: transparent;
  border-width: 15px 8px 0px;
`;

const TopContain = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;

input {
  width: 75px;
}
`;

const InterestRate = ({ homePrice, interestRate, handleInterestChange }) => {
  const [value, setValue] = useState(interestRate);
  const [fill, setFill] = useState(75);
  const [max, setMax] = useState(0);

const handleChange = (e) => {
    let val = e.target.value.replace('%', '');
    if (val === null) {
      val = '';
    }
    handleInterestChange(val);
    setValue(val);
  };

  const styles = {
    background: `linear-gradient(to right,
      rgb(0, 120, 130) 0%,
      rgb(0, 120, 130) ${fill}%,
      rgb(205, 209, 212) ${fill}%,
      rgb(205, 209, 212) 100%)`,
  };

  useEffect(() => {
    setMax(interestRate * 1.5);
  }, []);

  return (
    <InterestRateContain>
      <TopContain>
        <h4>Interest Rate</h4>
        <input type="text" className="money-input" value={`${interestRate}%`} onChange={handleChange} />
      </TopContain>
      <input
        style={styles}
        className="range"
        type="range"
        min="0"
        max={max}
        step=".1"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </InterestRateContain>
  );
};

export default InterestRate;
