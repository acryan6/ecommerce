import { shallow } from "enzyme";
import React from "react";
import { SignUp } from "./sign-up.component.jsx";

describe("sign-up component", () => {
  it("expect to render sign-up component", () => {
    expect(shallow(<SignUp />)).toMatchSnapshot();
  });

  it("correctly handles changes and submits", () => {
    const wrapper = shallow(<SignUp />);
  });
});
