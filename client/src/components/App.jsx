import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Display from './Display';
import Controls from './Controls';

const AppContainer = styled.div`
width: 100%;
padding 20px;
display: flex;
flex-flow: column nowrap;
`;

const App = () => {
  const [homePrice, setHomePrice] = useState(1004100);
  const [payment, setPayment] = useState(homePrice * 0.005);

  if (!homePrice) return (<div>Loading...</div>);

  return (
    <AppContainer>
      <Header payment={payment} />
      <Controls homePrice={homePrice} />
      <Display homePrice={homePrice} />
    </AppContainer>
  );
};

export default App;
