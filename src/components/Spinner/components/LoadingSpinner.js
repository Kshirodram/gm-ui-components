import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

// import { spacingScale } from "style/styleFunctions";

// import spinGradient from "./spinGradient";

// const backgroundImage = css`
//   background-image: linear-gradient(
//     to right,
//     ${props => transparentize(1, props.theme.COLOR_BRAND_A)} 40%,
//     ${props => props.theme.COLOR_BRAND_A} 60%,
//     ${props => transparentize(1, props.theme.COLOR_BRAND_A)}
//   );
// `;

// const pseudoElementShadow = css`
//   box-shadow: 0 0 1px ${props => transparentize(0.8, props.theme.COLOR_BRAND_A)};
// `;

// Inherit theme from styled components class, vs through wrapping LoadingSpinner in
// the withComponent() HOC to avoid a production bug:
// https://github.com/styled-components/styled-components/issues/1709#issuecomment-428460130
// TODO: Refactor this after upgrading to v4
export const Stop = styled.stop.attrs({
  stopColor: ({ theme, transparent }) =>
    transparent
      ? transparentize(0.85, theme.brandColor || SPINNER_COLOR)
      : theme.brandColor || SPINNER_COLOR
})``;

export function LoadingSpinner(props) {
  return (
    <SpinnerSVG
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" transparent />
          <Stop offset="33%" transparent />
          <Stop offset="100%" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="url(#gradient)"
        vectorEffect="non-scaling-stroke"
        strokeWidth="1"
        fill="none"
        transform="rotate(90 50 50)"
      />
    </SpinnerSVG>
  );
}

LoadingSpinner.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  theme: PropTypes.shape({ brandColor: PropTypes.string })
};

LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
