import { shallow } from "enzyme";
import React from "react";
import { MenuItem } from "./menu-item.component.jsx";

describe("MenuItem component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = "/hats";
  const size = "large";
  const imageUrl = "img.com";

  beforeEach(() => {
    mockMatch = {
      url: "/shop",
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      imageUrl,
      title: "hats",
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("should render MenuItem component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when clicked", () => {
    wrapper.find("MenuItemContainer").simulate("click");

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });
});
