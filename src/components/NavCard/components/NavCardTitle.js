import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const NavCardTitle = styled.div`
  margin: ${spacingScale(0.5)} ${spacingScale(1)} ${spacingScale(0)};
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  align-items: center;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  justify-content: center;

  h1 {
    font-size: ${props => props.theme.FONT_SIZE_BASE};
    font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
    padding-left: ${spacingScale(0.5)};
    flex: 1 1 100%;
    line-height: 1;
    margin: 0;
    text-transform: capitalize;
  }
`;

export default NavCardTitle;
