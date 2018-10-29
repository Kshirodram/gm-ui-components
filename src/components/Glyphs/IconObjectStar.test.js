import React from "react";
import { shallow } from "enzyme";

import IconObjectStar from "./IconObjectStar";

describe("IconObjectStar", () => {
  it("matches snapshot", () => {
    const aIconObjectStar = shallow(<IconObjectStar />);
    expect(aIconObjectStar).toMatchSnapshot();
  });
});