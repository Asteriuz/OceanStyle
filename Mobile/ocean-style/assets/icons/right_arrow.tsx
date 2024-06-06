import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function RightArrow(props: {
  color: string;
  width: number;
  height: number;
}) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24">
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G
          transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) translate(4.000000, 7.500000)"
          fill={props.color}
          fill-rule="nonzero"
        >
          <Path d="M0.469669914,0.469669914 C0.735936477,0.203403352 1.15260016,0.1791973 1.44621165,0.397051761 L1.53033009,0.469669914 L8,6.939 L14.4696699,0.469669914 C14.7359365,0.203403352 15.1526002,0.1791973 15.4462117,0.397051761 L15.5303301,0.469669914 C15.7965966,0.735936477 15.8208027,1.15260016 15.6029482,1.44621165 L15.5303301,1.53033009 L8.53033009,8.53033009 C8.26406352,8.79659665 7.84739984,8.8208027 7.55378835,8.60294824 L7.46966991,8.53033009 L0.469669914,1.53033009 C0.176776695,1.23743687 0.176776695,0.762563133 0.469669914,0.469669914 Z"></Path>
        </G>
      </G>
    </Svg>
  );
}