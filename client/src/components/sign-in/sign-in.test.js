import { shallow } from "enzyme";
import React from "react";
import { SignIn } from "./sign-in.component.jsx";

describe("sign-in component", () => {
  let wrapper;
  let mockEmailSignInStart;
  let mockGoogleSignInStart;

  it("expect to render sign-in component", () => {
    expect(shallow(<SignIn />)).toMatchSnapshot();
  });

  it("correctly handles changes and submits", () => {
    const wrapper = shallow(<SignIn />);
  });
});
