import styled, { css } from "styled-components";

import { spacingScale } from "style/styleFunctions";

const backgroundImage = css`
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const HeaderToolbarWrapper = styled.nav`
  ${backgroundImage};
  background-color: transparent;
  color: #fff;
  flex: 0 0 ${spacingScale(4)};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  padding: 0 ${spacingScale(2)};
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export default HeaderToolbarWrapper;
