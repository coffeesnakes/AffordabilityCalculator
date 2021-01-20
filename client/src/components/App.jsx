import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Display from './Display';
import Controls from './Controls';
import * as calc from './utils/calculator';

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
      homePrice: null,
      payment: null,
      downPayment: null,
      percentDown: 0.2,
      interestRate: 2.94,
      principle: null,
      propertyTaxes: null,
      homeInsurance: 75,
      mortgageIns: 0,
      loading: true,
      error: null,
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  componentDidMount() {
    this.handlePriceChange(1400000);
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
