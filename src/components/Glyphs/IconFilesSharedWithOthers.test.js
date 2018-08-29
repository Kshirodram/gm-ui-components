import React from "react";
import { shallow } from "enzyme";

import IconFilesSharedWithOthers from "./IconFilesSharedWithOthers";

describe("IconFilesSharedWithOthers", () => {
  it("matches snapshot", () => {
    const aIconFilesSharedWithOthers = shallow(<IconFilesSharedWithOthers />);
    expect(aIconFilesSharedWithOthers).toMatchSnapshot();
  });
});