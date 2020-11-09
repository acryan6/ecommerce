import { shallow } from "enzyme";
import React from "react";
import { SignIn } from "./sign-in.component.jsx";
import FormInput from "../form-input/form-input.component";

describe("sign-in component", () => {
  let wrapper;
  let mockEmailSignInStart;
  let mockGoogleSignInStart;

  beforeEach(() => {
    mockEmailSignInStart = jest.fn();
    mockGoogleSignInStart = jest.fn();

    const mockProps = {
      emailSignInStart: mockEmailSignInStart,
      googleSignInStart: mockGoogleSignInStart,
    };

    wrapper = shallow(<SignIn {...mockProps} />);
  });

  it("should render sign-in component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("correctly handles submit", () => {
    const preventDefault = jest.fn();
    wrapper.find("form").simulate("submit", { preventDefault });

    expect(mockEmailSignInStart).toHaveBeenCalled();
  });

  it("calls googleSignInStart", () => {
    wrapper.find("CustomButton").at(1).simulate("click");

    expect(mockGoogleSignInStart).toHaveBeenCalled();
  });
});
