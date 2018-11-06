import styled from "styled-components";

import BannerBackgroundImage from "./images/mesh-web.jpg";

const HeaderWrapper = styled.div`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  color: #fff;
  background-color: #000;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    ),
    url(${BannerBackgroundImage});
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: stretch;
  background-size: 100% 100%, 120% auto;
  background-position: center center, left center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export default HeaderWrapper;
