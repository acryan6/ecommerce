import { shallow } from "enzyme";
import React from "react";
import { SignUp } from "./sign-up.component.jsx";

describe("sign-up component", () => {
  let wrapper;
  let mockSignUpStart;

  beforeEach(() => {
    mockSignUpStart = jest.fn();

    const mockProps = {
      signUpStart: mockSignUpStart,
    };

    wrapper = shallow(<SignUp {...mockProps} />);
  });

  it("expect to render sign-up component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("correctly handles submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(mockSignUpStart).toHaveBeenCalled();
  });
});
