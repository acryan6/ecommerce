import { shallow } from "enzyme";
import React from "react";
import { Header } from "./header.component.jsx";

it("expect to render header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
