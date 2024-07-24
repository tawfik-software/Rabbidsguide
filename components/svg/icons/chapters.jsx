import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const SvgComponent = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path fill={color} d="M0 .5h20v19H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.0095 0 0 .01 .025 0)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
);
export default SvgComponent;
