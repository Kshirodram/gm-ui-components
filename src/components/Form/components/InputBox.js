import styled from "styled-components";
import { transparentize } from "polished";

import { spacingScale } from "style/styleFunctions";
import { formInteractionStyles } from "./InputFieldInteractionStyles";

const BORDER_WIDTH = 1;

const ACTIVE_SHADOW = `inset 0 0 0 1px ${props =>
  props.theme.COLOR_INTENT_HIGHLIGHT}`;
const FOCUS_SHADOW = `0 0 0 ${props =>
  props.theme.FORM_HIGHLIGHT_SIZE}px ${props =>
  transparentize(
    1 - props.theme.OPACITY_50,
    props.theme.COLOR_INTENT_HIGHLIGHT
  )}`;

const InputBox = styled.input`
  ${formInteractionStyles};
  border: ${BORDER_WIDTH}px solid ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
  color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
  font-size: ${spacingScale(2)};
  margin: ${spacingScale(0.25)};
  appearance: none;
  flex: 0 0 calc(1em - ${BORDER_WIDTH * 2}px);
  height: calc(1em - ${BORDER_WIDTH * 2}px);
  width: calc(1em - ${BORDER_WIDTH * 2}px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:focus {
    box-shadow: ${FOCUS_SHADOW}, 0;
  }

  &:active {
    box-shadow: ${ACTIVE_SHADOW}, 0;

    &:focus {
      box-shadow: ${FOCUS_SHADOW}, ${ACTIVE_SHADOW};
    }
  }

  &:after {
    content: "";
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  }

  &:checked {
    background: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};

    &:after {
      opacity: 1;
    }
  }

  &:disabled {
    border-color: ${props => props.theme.COLOR_BACKGROUND_C};
    opacity: ${props => props.theme.OPACITY_50};
    box-shadow: none;

    &:checked {
      background-color: ${props => props.theme.COLOR_BACKGROUND_C};
    }
  }
`;

export default InputBox;
