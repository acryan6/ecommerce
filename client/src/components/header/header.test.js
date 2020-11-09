import { shallow } from "enzyme";
import React from "react";
import { Header } from "./header.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe("Header component", () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      currentUser: {
        uid: "123",
      },
      hidden: true,
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if currentUser is present", () => {
    it("should render sign out link", () => {
      expect(wrapper.find("OptionLink").at(2).text()).toEqual("SIGN OUT");
    });

    it("should call signOutStart method when link is clicked", () => {
      wrapper.find("OptionLink").at(2).simulate("click");

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        currentUser: null,
        hidden: true,
        signOutStart: mockSignOutStart,
      };

      let newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find("OptionLink").at(2).text()).toEqual("SIGN IN");
    });
  });

  describe("if hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe("if hidden is false", () => {
    it("should render CartDropdown", () => {
      const mockProps = {
        currentUser: {
          uid: "123",
        },
        hidden: false,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
