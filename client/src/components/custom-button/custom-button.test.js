import { shallow } from 'enzyme';
import React from 'react';
import CustomButton from './custom-button.component.jsx';

it('expect to render custom-button component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
})
