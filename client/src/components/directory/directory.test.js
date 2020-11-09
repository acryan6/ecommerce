import { shallow } from "enzyme";
import React from "react";
import { Directory } from "./directory.component.jsx";

it("expect to render directory component", () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
