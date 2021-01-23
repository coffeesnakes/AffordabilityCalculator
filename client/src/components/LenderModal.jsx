import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoanRates from "./LoanRates.jsx";

import axios from 'axios';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const LendersContainer = styled.div`
  height: 90vh;
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`;

const LenderModal = ({ toggleModal }) => {
const [lenders, setLenders] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLenders = async () => {
      const { data } = await axios.get('/lenders');
      console.log(data);
      setLenders(data);
      setLoading(false);
    };
    fetchLenders();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const filterBy30Year = lenders.filter((lender) => lender.offerings.terms === '30 Year Fixed');

  const filterBy15Year = lenders.filter((lender) => lender.offerings.terms === '15 Year Fixed');

  return (
    <ModalBackground onClick={toggleModal}>
      <LendersContainer onClick={handleClick}>
        <LoanRates title="30 YEAR FIXED" subTitle="30yr" lenders={filterBy30Year} />
        <LoanRates title="15 YEAR FIXED" subTitle="15yr" lenders={filterBy15Year} />
      </LendersContainer>
    </ModalBackground>
  );
};

export default LenderModal;
