import styled from "styled-components";

import { FONT_SIZE_SM } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const NavCardDetails = styled.dl`
  margin: 0 ${spacingScale(0.5)} ${spacingScale(0.25)} ${spacingScale(4.5)}; /* Odd number required to align with title */
  font-size: ${FONT_SIZE_SM};
  line-height: 1.2;
  color: inherit;

  &:last-child {
    margin-bottom: ${spacingScale(1)};
  }
`;

export default NavCardDetails;
