import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Display from './Display.jsx';
import Controls from './Controls.jsx';

const AppContainer = styled.div`
width: 100%;
padding 20px;
color: purple;
font-size: 30px;
`;

const App = () => (
  <AppContainer>
    <Header />
    <Display />
    <Controls />
  </AppContainer>
);

export default App;
