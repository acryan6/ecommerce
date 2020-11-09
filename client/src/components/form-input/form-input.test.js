import { shallow } from "enzyme";
import React from "react";
import FormInput from "./form-input.component.jsx";

describe("formInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "email",
      value: "user@gmail.com",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange when input changes", () => {
    wrapper.find("FormInputContainer").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormInputLabel if there is a label", () => {
    expect(wrapper.exists("FormInputLabel")).toBe(true);
  });

  it("should not render FormInputLabel if there is no label", () => {
    const mockProps = {
      label: "",
      email: "user@gmail.com",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockProps} />);

    expect(newWrapper.exists("FormInputLabel")).toBe(false);
  });
});
