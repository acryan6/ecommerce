import React from "react";
import { shallow } from "enzyme";

import HomePage from "./homepage.component";

describe("HomePage component", () => {
  it("should render component", () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
