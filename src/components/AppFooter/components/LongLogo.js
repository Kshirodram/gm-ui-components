import styled from "styled-components";
import { spacingScale } from "../../../style/styleFunctions";

const LongLogo = styled.a`
  padding: 0 ${spacingScale(1)};
  opacity: ${props => props.theme.OPACITY_70};
  flex: 0 1 auto;
  text-align: left;
  transition: all 0.2s ease;
  filter: grayscale(100%);
  color: inherit;

  &:hover {
    opacity: ${props => props.theme.OPACITY_100};
    transition: all 0.2s ease;
    filter: grayscale(0%);
  }
`;

export default LongLogo;
