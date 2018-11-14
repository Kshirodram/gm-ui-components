import styled from "styled-components";
import { PropTypes } from "prop-types";

import { transparentize } from 'polished';
import { spacingScale } from "style/styleFunctions";

const ReadoutDisplay = styled.div`
  color: ${props => props.theme.COLOR_CONTENT};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-radius: ${props => props.theme.RADIUS_05};
  margin: 0 ${spacingScale(1)} ${spacingScale(1)} 0;
  padding: 0 ${spacingScale(0.5)};
  position: relative;
  overflow: hidden;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  box-shadow: inset 0 1px 1px 0px ${props => props.theme.COLOR_KEYLINE};
  background-color: ${props => props.theme.COLOR_BACKGROUND_B};
  background-image: linear-gradient(to bottom, ${props => props.color} -160%, transparent 400%);

  &:first-child:last-child {
    flex-grow: 0;
  }

  ${props =>
    props.primary &&
    `
    &:before {
      opacity: 0.3;
    }
  `};
`;

ReadoutDisplay.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool
};

export default ReadoutDisplay;
