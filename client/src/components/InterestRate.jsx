import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

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
  const [max, setMax] = useState(0);

const handleChange = (event) => {
    let val = event.target.value.replace('%', '');
    if (val === null) {
      val = '';
    }
    event.target.style.setProperty(
      '--webkitProgressPercent',
      `${(val / max) * 100 - 4}%`,
    );
    handleInterestChange(val);
    setValue(val);
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
