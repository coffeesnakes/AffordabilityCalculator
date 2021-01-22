import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

import RangeSlider from './RangeSlider';

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
  const [fill, setFill] = useState(75);
  const [max, setMax] = useState(0);
  const formatPrice = numeral(homePrice).format('0,0');

  const handleChange = (event) => {
    let target = event.target.value;
    if (target[0] === '$') {
      const pureValue = target.slice(1);
      target = numeral(pureValue).value();
    }
    setValue(target);
    setFill((target / max) * 100);
    handlePriceChange(target);
  };

  const styles = {
    background: `linear-gradient(to right,
      rgb(0, 120, 130) 0%,
      rgb(0, 120, 130) ${fill}%,
      rgb(25, 209, 212) ${fill}%,
      rgb(205, 209, 212) 100%)`,
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
    </HomePriceContain>
  );
};

export default HomePrice;
