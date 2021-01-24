import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

const HomePriceContain = styled.div`
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
    width: 112px;
  }
`;

const HomePrice = ({ homePrice, handlePriceChange }) => {
  const [value, setValue] = useState(homePrice);
  const [max, setMax] = useState(0);
  const formatPrice = numeral(homePrice).format('0,0');

  const handleChange = (event) => {
    let target = event.target.value;
    if (target[0] === '$') {
      const pureValue = target.slice(1);
      target = numeral(pureValue).value();
    }
    event.target.style.setProperty(
      '--webkitProgressPercent',
      `${(target / max) * 100 - 4}%`,
    );
    setValue(target);
    handlePriceChange(target);
  };

  useEffect(() => {
    setMax(homePrice * 1.5);
  }, []);

  return (
    <HomePriceContain>
      <TopContain>
        <h4>Home Price</h4>
        <input type="text" className="money-input" value={`$${formatPrice}`} onChange={handleChange} />
      </TopContain>
      <input className="range" type="range" min="0" max={max} step="10" value={value} onChange={handleChange} />
    </HomePriceContain>
  );
};

export default HomePrice;
