import React, { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.input`
background:
  linear-gradient(to right,
    rgb(0, 120, 130) 0%,
    rgb(0, 120, 130) ${({ fill }) => fill}%,
    rgb(205, 209, 212) ${({ fill }) => fill}%,
    rgb(205, 209, 212) 100%);
    transition: all 0s ease 0s
`;

const RangeSlider = ({ homePrice, min, max }) => {
  const [value, setValue] = useState(1000000);
  const [fill, setFill] = useState(75);

  const handleChange = (event) => {
    setValue(event.target.value);
    setFill((event.target.value / (max - min)) * 100);
  };

  console.log(homePrice);

  return (
    <Slider className="range" type="range" min={min} max={max} step="10" value={value} onChange={handleChange} fill={fill} />
  );
};

export default RangeSlider;
