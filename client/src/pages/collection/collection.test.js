import React from "react";
import { shallow } from "enzyme";

import { CollectionPage } from "./collection.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

describe("CollectionPage", () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: "Items",
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it("should render CollectionPage", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render CollectionItems", () => {
    expect(wrapper.find(CollectionItem).length).toEqual(mockItems.length);
  });
});
