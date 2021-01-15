/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';

function Holder() {
  return (
    <div>
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
      <input id="tertiary" defaultChecked checked={false} />
    </div>
  );
}

describe('<Holder />', () => {
  it('assert checked', () => {
    const wrapper = mount(<Holder />);
    expect(wrapper.find('#checked')).toBeChecked();
    expect(wrapper.find('#not')).not.toBeChecked();
  });
// eslint-disable-next-line eol-last
});
