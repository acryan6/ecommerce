import { shallow } from 'enzyme';
import React from 'react';
import MenuItem from './menu-item.component.jsx';

it('expect to render menu-item component', () => {
  expect(shallow(<MenuItem />)).toMatchSnapshot();
})
