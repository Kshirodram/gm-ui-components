import styled from "styled-components";
import { spacingScale } from "style/styleFunctions";

const TabGroupLabel = styled.p`
  padding: 0 ${spacingScale(1)};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  height: 100%;
  margin: auto 0;
  flex: 0 0 auto;
`;

export default TabGroupLabel;
