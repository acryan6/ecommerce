import React from "react";
import { shallow } from "enzyme";

import { CheckoutItem } from "./checkout-item.component";

describe("Checkout item", () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: "mock.com",
        price: 0.01,
        name: "hats",
        quantity: 101,
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it("should render ChekoutItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call clearItem when remove button is clicked", () => {
    wrapper.find("RemoveButton").simulate("click");
    expect(mockClearItem).toHaveBeenCalled();
  });

  it("should call addItem when right arrow is clicked", () => {
    wrapper.find("QuantityContainer").childAt(2).simulate("click");
    expect(mockAddItem).toHaveBeenCalled();
  });

  it("should call removeItem when left arrow is clicked", () => {
    wrapper.find("QuantityContainer").childAt(0).simulate("click");
    expect(mockRemoveItem).toHaveBeenCalled();
  });
});
