import { shallow } from 'enzyme';
import React from 'react';
import CollectionItem from './collection-item.component.jsx';

it('expect to render collection-item component', () => {
  expect(shallow(<CollectionItem />)).toMatchSnapshot();
})
