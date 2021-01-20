import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: '30-year fixed',
      homePrice: 1500000,
      payment: 10000,
      downPayment: 750000,
      percentDown: 0.2,
      interestRate: 2.94,
      principle: 11363,
      propertyTaxes: 1847,
      homeInsurance: 75,
      mortgageInsurace: 0,
    };
  }

  render() {
    const { payment, homePrice } = this.state;

    if (!homePrice) return (<div>Loading...</div>);

    return (
      <AppContainer>
        <Header payment={payment} />
        <Controls homePrice={homePrice} />
        <Display homePrice={homePrice} />
      </AppContainer>
    );
  }
}

export default App;
