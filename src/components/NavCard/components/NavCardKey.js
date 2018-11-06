import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const NavCardKey = styled.dt`
  opacity: ${props => props.theme.OPACITY_70};
  padding-right: ${spacingScale(1)};
  display: inline-block;
`;

export default NavCardKey;
