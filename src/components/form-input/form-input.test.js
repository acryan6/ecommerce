import { shallow } from 'enzyme';
import React from 'react';
import FormInput from './form-input.component.jsx';

it('expect to render form-input component', () => {
  expect(shallow(<FormInput />)).toMatchSnapshot();
})
