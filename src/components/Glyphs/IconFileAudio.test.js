import React from "react";
import { shallow } from "enzyme";

import IconFileAudio from "./IconFileAudio";

describe("IconFileAudio", () => {
  it("matches snapshot", () => {
    const aIconFileAudio = shallow(<IconFileAudio />);
    expect(aIconFileAudio).toMatchSnapshot();
  });
});