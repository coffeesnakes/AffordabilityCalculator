import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Display from './Display';
import Controls from './Controls';
import * as calc from '../utils/calculator';

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
      loanType: "30-year fixed",
      homePrice: null,
      payment: null,
      downPayment: null,
      percentDown: 0.2,
      interestRate: 2.94,
      principle: null,
      propertyTaxes: null,
      homeInsurance: 75,
      mortgageIns: 200,
      loading: true,
      error: null,
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  componentDidMount() {
    this.handlePriceChange(1400000);
  }

  handlePriceChange(homePrice) {
    const downPayment = calc.calculateAmountDown(
      homePrice,
      this.state.percentDown
    );
    const propTax = calc.calcPropTax(homePrice);
    const principle = calc.calcPrinciple(
      homePrice,
      downPayment,
      this.state.interestRate,
      244
    );
    const payment = calc.calcPayment(
      principle,
      propTax,
      this.state.mortgageIns
    );
    const percentDown = calc.calculatePercentDown(homePrice, downPayment);

    this.setState({
      homePrice,
      propertyTaxes: propTax,
      principle,
      payment,
      downPayment,
      loading: false,
    });
  }

  render() {
    const {
      payment,
      homePrice,
      interestRate,
      percentDown,
      downPayment,
      principle,
      loading,
      propertyTaxes,
      mortgageIns,
    } = this.state;

    if (loading) return <div>Loading...</div>;

    return (
      <AppContainer>
        <Header payment={payment} />
        <Controls
          homePrice={homePrice}
          handlePriceChange={this.handlePriceChange}
          state={this.state}
          downPayment={downPayment}
          interestRate={interestRate}
        />
        <Display homePrice={homePrice} state={this.state} />
      </AppContainer>
    );
  }
}

export default App;
