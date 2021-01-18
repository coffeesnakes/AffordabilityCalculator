import React, { useState } from 'react';
import styled from 'styled-components';

import RangeSlider from './RangeSlider';

const homePriceContain = styled.div`
flex: 1;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: space-between
border-style: solid;
border-color: transparent;
border-width: 15px 8px 9px;
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

const HomePrice = ({ homePrice }) => {
  const [value, setValue] = useState(homePrice);

  const [fill, setFill] = useState(75);
  const max = homePrice * 1.5;

  const handleChange = (event) => {
    setValue(event.target.value);
    setFill((event.target.value / max) * 100);
  };

  const styles = {
    background: `linear-gradient(to right,
      rgb(0, 120, 130) 0%,
      rgb(0, 120, 130) ${fill}%,
      rgb(25, 209, 212) ${fill}%,
      rgb(205, 209, 212) 100%)`,
  };
  return (
    <homePriceContain>
      <TopContain className="top-container">
        <h4>Home Price</h4>
        <input type="text" className="money-input" />
      </TopContain>
      <input style={styles} className="range" type="range" min="0" max={max} step="10" value={value} onChange={handleChange} />
    </homePriceContain>
  );
};

export default HomePrice;
