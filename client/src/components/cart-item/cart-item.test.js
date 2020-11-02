import React from "react";
import { shallow } from "enzyme";

import CartItem from "./cart-item.component";

describe("CartItem component", () => {
  it("should render CartItem component", () => {
    let mockItem = {
      imageUrl: "mock.com",
      price: 0.01,
      name: "hats",
      quantity: 101,
    };

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  });
});
