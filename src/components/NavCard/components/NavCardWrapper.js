import styled from "styled-components";
import { mix, readableColor } from "polished";

import { spacingScale } from "style/styleFunctions";

const COLOR_TAB_BACKGROUND_BASE = props =>
  mix(
    props.theme.OPACITY_15,
    props.theme.COLOR_BACKGROUND_B,
    props.theme.COLOR_BACKGROUND_C
  );

const TAB_WIDTH_BASE = "1%";

// Note: Edge requires the overflow: hidden property to maintian
// equal sized cards. flex-basis is not sufficient!
const NavCardWrapper = styled.div`
  font-weight: ${props => props.theme.FONT_WEIGHT_REGULAR};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_C)};
  flex: 1 1 ${TAB_WIDTH_BASE};
  background-color: ${COLOR_TAB_BACKGROUND_BASE};
  border-radius: ${props => props.theme.RADIUS_05};
  min-height: ${spacingScale(8)};
  margin: ${spacingScale(0.25)};
  position: relative;
  transition: all 0.15s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: ${spacingScale(10)};
  margin: ${spacingScale(0.25)};

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${props => props.theme.RADIUS_05};
    border: 2px solid ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    opacity: 0;
  }

  &:before {
    border-radius: ${props => props.theme.RADIUS_05};
    background-color: ${props => props.theme.COLOR_BACKGROUND_C};
    border: 0;
  }

  &:focus,
  &:hover {
    color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
  }
`;

export default NavCardWrapper;
