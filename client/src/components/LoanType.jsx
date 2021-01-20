import React, { useState } from "react";
import styled from "styled-components";

const LoanTypeContainer = styled.div`
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
  margin-bottom: 16px;
  input {
    width: 112px;
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  display: inline-block;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  font-weight: bold;
  border: 1px solid rgb(205, 209, 212);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 8px;
  outline: none;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  &:focus {
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
    outline: 0;
  }
  &:focus-within {
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
    outline: 0;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
`;

const Arrow = styled.i`
  border: solid rgb(59, 65, 68, 0.7);
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
`;

const LoanType = () => {
  const [selectValue, setSelectValue] = useState("30-year fixed");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <LoanTypeContainer>
      <TopContainer className="top-container">
        <h4>Loan Type</h4>
      </TopContainer>
      <SelectContainer>
        <MediaContainer>
          <h4>{selectValue}</h4>
          <Arrow />
        </MediaContainer>
        <select className="loan-type-select" onChange={handleChange}>
          <option value="30-year fixed">30-year fixed</option>
          <option value="20-year fixed">20-year fixed</option>
          <option value="15-year fixed">15-year fixed</option>
          <option value="10-year fixed">10-year fixed</option>
          <option value="FHA 30-year fixed">FHA 30-year fixed</option>
          <option value="FHA 15-year fixed">FHA 15-year fixed</option>
          <option value="VA 30-year fixed">VA 30-year fixed</option>
          <option value="VA 15-year fixed">VA 15-year fixed</option>
        </select>
      </SelectContainer>
    </LoanTypeContainer>
  );
};

export default LoanType;
