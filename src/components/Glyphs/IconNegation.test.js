import React from "react";
import { shallow } from "enzyme";

import IconNegation from "./IconNegation";

describe("IconNegation", () => {
  it("matches snapshot", () => {
    const aIconNegation = shallow(<IconNegation />);
    expect(aIconNegation).toMatchSnapshot();
  });
});