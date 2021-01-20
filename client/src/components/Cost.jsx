import React from 'react';
import styled from 'styled-components';

const CostContain = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
margin: 4px 0;
`;

const CostDescription = styled.div`
display: flex;
flex-flow; row nowrap;
justify-content: space-between;
align-items: center;
font-size: 16px;
`;

const ColorRound = styled.div`
width: 16px;
height: 16px;
border-radius: 100px;
background-color: $({(color)} => color);
margin-right: 10px;
`;

const Cost = ({ color, title, homePrice }) => (
  <CostContain>
    <CostDescription>
      <ColorRound color={color} />
      {title}
    </CostDescription>
    <h4>$3000</h4>
  </CostContain>
);

export default Cost;
