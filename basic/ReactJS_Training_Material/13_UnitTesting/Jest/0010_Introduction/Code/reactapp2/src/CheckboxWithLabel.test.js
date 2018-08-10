import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CheckboxWithLabel from './CheckboxWithLabel';

//Configure Enzyme
Enzyme.configure({ adapter: new Adapter() })

describe('Testing <CheckboxWithLabel/>', () => {

  // Render a checkbox with label in the document
  const checkbox = Enzyme.shallow(<CheckboxWithLabel labelOn="Checked" labelOff="Unchecked" />);

  test('Text indicates UNCHECKED status on initial load', () => {
    expect(checkbox.text()).toEqual('Unchecked');
  });

  test('Text changes when checkbox is clicked', () => {
    checkbox
      .find('input')
      .simulate('change');

    expect(checkbox.text()).toEqual('Checked');
  });

});