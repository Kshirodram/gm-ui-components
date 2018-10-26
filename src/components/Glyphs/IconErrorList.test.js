import React from "react";
import { shallow } from "enzyme";

import IconErrorList from "./IconErrorList";

describe("IconErrorList", () => {
  it("matches snapshot", () => {
    const aIconErrorList = shallow(<IconErrorList />);
    expect(aIconErrorList).toMatchSnapshot();
  });
});