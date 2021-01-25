import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Header';
import Display from './Display';
import Controls from './Controls';
import LenderModal from './LenderModal';

import * as calc from '../utils/calculator';

const AppContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: 244,
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
      showModal: false,
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDownPaymentChange = this.handleDownPaymentChange.bind(this);
    this.handlePercentDownChange = this.handlePercentDownChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleLoanTypeChange = this.handleLoanTypeChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  async componentDidMount() {
    const randomIdx = Math.floor(Math.random() * 100);
    const { data } = await axios.get(`http://localhost:3003/homes/${randomIdx}`);
    this.handlePriceChange(data.price);
  }

  handleInterestChange(interestRate) {
    const { homePrice, mortgageIns, propertyTaxes, downPayment, loanType } = this.state;
    const principle = calc.calcPrinciple(
      homePrice,
      downPayment,
      interestRate,
      loanType,
    );
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      payment,
      interestRate,
    });
  }

  handlePriceChange(homePrice) {
    const downPayment = calc.calculateAmountDown(homePrice, this.state.percentDown);
    const propTax = calc.calcPropTax(homePrice);
    const principle = calc.calcPrinciple(
      homePrice,
      downPayment,
      this.state.interestRate,
      this.state.loanType,
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

  handleDownPaymentChange(downPayment) {
    const { homePrice, propertyTaxes, loanType } = this.state;
    const percentDown = calc.calculatePercentDown(homePrice, downPayment);
    const principle = calc.calcPrinciple(
      homePrice,
      downPayment,
      percentDown,
      loanType,
    );
    const mortgageIns = calc.calcMortgageIns(percentDown, homePrice, downPayment);
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);
    this.setState({
      principle,
      payment,
      downPayment,
      percentDown,
      mortgageIns,
    });
  }

  handlePercentDownChange(percentDownUnfiltered) {
    const percentDown = percentDownUnfiltered / 100;

    const { homePrice, propertyTaxes, interestRate, loanType } = this.state;
    const downPayment = calc.calculateAmountDown(homePrice, percentDown);
    const principle = calc.calcPrinciple(
      homePrice,
      downPayment,
      interestRate,
      loanType,
    );
    const mortgageIns = calc.calcMortgageIns(percentDown, homePrice, downPayment);
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      payment,
      downPayment,
      percentDown,
      mortgageIns,
    });
  }

  handleLoanTypeChange(loanType) {
    const {
      homePrice,
      downPayment,
      interestRate,
      propertyTaxes,
      mortgageIns,
    } = this.state;

    const principle = calc.calcPrinciple(
      homePrice,
      downPayment,
      interestRate,
      loanType,
    );
    const payment = calc.calcPayment(principle, propertyTaxes, mortgageIns);

    this.setState({
      principle,
      loanType,
      payment,
    });
  }

  toggleModal(e) {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
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
      showModal,
    } = this.state;

    if (loading) return <div>Loading...</div>;

    return (
      <AppContainer>
        <Header payment={payment} />
        <Controls
          homePrice={homePrice}
          handlePriceChange={this.handlePriceChange}
          handleDownPaymentChange={this.handleDownPaymentChange}
          handlePercentDownChange={this.handlePercentDownChange}
          handleInterestChange={this.handleInterestChange}
          handleLoanTypeChange={this.handleLoanTypeChange}
          state={this.state}
          downPayment={downPayment}
          interestRate={interestRate}
        />
        <Display homePrice={homePrice} state={this.state} toggleModal={this.toggleModal} />
        { showModal && <LenderModal toggleModal={this.toggleModal} />}
      </AppContainer>
    );
  }
}

export default App;
