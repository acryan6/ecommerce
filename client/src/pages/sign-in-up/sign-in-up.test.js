import React from "react";
import { shallow } from "enzyme";
import SignInAndUp from "./sign-in-up.component";

describe("SignInAndUp page", () => {
  it("should render component", () => {
    expect(shallow(<SignInAndUp />)).toMatchSnapshot();
  });
});
