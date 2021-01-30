/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';
import Display from '../client/src/components/Display';
import Controls from '../client/src/components/Controls';
import CostBreakdown from '../client/src/components/CostBreakdown';

describe('App testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Header rendered lets go dood!', () => {
    expect(wrapper.find('Header')).toExist();
  });

  it('Renders Controls', () => {
    expect(wrapper.find('Controls')).toExist();
  });

  it('Renders the Display component POGGERS.', () => {
    expect(wrapper.find('Display')).toExist();
  });
});

describe('Display testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Display />);
  });

  it('Renders the doughnut chart', () => {
    expect(wrapper.find('Chart')).toExist();
  });
  it('Rendering the breakdown', () => {
    expect(wrapper.find('CostBreakdown')).toExist();
  });
});

describe('Controls testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Controls />);
  });
  it('Rendering the home\'s price', () => {
    expect(wrapper.find('HomePrice')).toExist();
  });

  it('Rendering the down payment', () => {
    expect(wrapper.find('DownPayment')).toExist();
  });

  it('Rendering the interest rate', () => {
    expect(wrapper.find('InterestRate')).toExist();
  });

  it('Rendering the loan type', () => {
    expect(wrapper.find('LoanType')).toExist();
  });
});

describe('Test for button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CostBreakdown />);
    it('Rendering the loan type', () => {
      expect(wrapper.find('Btn')).toExist();
    });
  });
});
