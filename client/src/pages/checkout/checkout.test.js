import React from "react";
import { shallow } from "enzyme";

import { CheckoutPage } from "./checkout.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

describe("CheckoutPage", () => {
  const mockProps = {
    cartItems: [
      { id: 1, name: "blue hat", imageUrl: "hat.com", price: 500, quantity: 1 },
    ],
    total: 500,
  };

  const wrapper = shallow(<CheckoutPage {...mockProps} />);

  it("should render page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render CheckoutItem if cart is not empty", () => {
    expect(wrapper.exists(CheckoutItem)).toBe(true);
  });
});
