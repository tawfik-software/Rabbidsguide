import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const SvgComponent = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 .917h22.267v21.667H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00973 0 0 .01 .013 0)" />
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
