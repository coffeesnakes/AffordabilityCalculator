import React from "react";
import styled from "styled-components";
import LoanRates from "./LoanRates.jsx";

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
  background-color: rgba(255, 255, 255, 1);
`;

const LenderModal = () => (
    <ModalBackground>
      <LendersContainer>
      <LoanRates></LoanRates>
      </LendersContainer>
    </ModalBackground>
);

export default LenderModal;
