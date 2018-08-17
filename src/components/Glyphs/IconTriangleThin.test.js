import React from "react";
import { shallow } from "enzyme";

import IconTriangleThin from "./IconTriangleThin";

describe("IconTriangleThin", () => {
  it("matches snapshot", () => {
    const aIconTriangleThin = shallow(<IconTriangleThin />);
    expect(aIconTriangleThin).toMatchSnapshot();
  });
});