import { shallow } from 'enzyme';
import React from 'react';
import CollectionPreview from './collection-preview.component.jsx';

it('expect to render collection-preview component', () => {
  const mockCollectionItems = {
    title: 'Mock Shoe',
    items: [
      {
        id: 1,
        name: 'Cool Shoe',
        price: '500',
        imageUrl: 'zappos.com'
      }
    ]
  }
  expect(shallow(<CollectionPreview { ...mockCollectionItems }/>)).toMatchSnapshot();
})
