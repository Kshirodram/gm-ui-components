import styled, { css } from "styled-components";
import { mix, darken } from "polished";

import { spacingScale } from "style/styleFunctions";

const activeBackgroundColor = css`
  background-color: ${props =>
    darken(
      0.1,
      mix(
        props.theme.OPACITY_15,
        props.theme.COLOR_BACKGROUND_B,
        props.theme.COLOR_BACKGROUND_C
      )
    )};
`;

const TAB_WIDTH_BASE = "1%";

const NavCardGroup = styled.nav`
  display: flex;
  flex-flow: row wrap;
  padding: ${spacingScale(0.25)};
  position: relative;
  background-color: ${props => props.theme.COLOR_BACKGROUND_C};
  /* Since the end-user will wrap NavCard with a link element,
     we need to style those child elements here */
  > * {
    flex: 1 1 ${TAB_WIDTH_BASE};
    display: flex;
    position: relative;
    align-items: stretch;
    min-height: ${spacingScale(8)};
    position: relative;
    text-decoration: none;
    /* When the link element is active, make NavCard's green border pseudo-element
       visible and style the NavCard background color. */
    &:active,
    &:active:hover,
    &.active,
    &.active:hover {
      div[class*="NavCardWrapper"] {
        &:after {
          opacity: 1;
        }
        ${activeBackgroundColor};
      }
    }
  }
`;

export default NavCardGroup;
