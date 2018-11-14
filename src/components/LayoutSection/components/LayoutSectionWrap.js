import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";

const LayoutSectionWrap = styled.section`
  color: ${props => props.theme.COLOR_CONTENT};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  align-items: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0 ${spacingScale(1)};
`;

export default LayoutSectionWrap;
