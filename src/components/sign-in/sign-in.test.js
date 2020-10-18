import { shallow } from 'enzyme';
import React from 'react';
import SignIn from './sign-in.component.jsx';

it('expect to render sign-in component', () => {
  expect(shallow(<SignIn />)).toMatchSnapshot();
})
