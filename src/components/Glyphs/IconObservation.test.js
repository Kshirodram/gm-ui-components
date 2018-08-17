import React from "react";
import { shallow } from "enzyme";

import IconObservation from "./IconObservation";

describe("IconObservation", () => {
  it("matches snapshot", () => {
    const aIconObservation = shallow(<IconObservation />);
    expect(aIconObservation).toMatchSnapshot();
  });
});