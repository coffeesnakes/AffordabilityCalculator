/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

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
