import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function Round(props: SvgProps) {
  return (
    <Svg
      width={props.width || 21}
      height={props.height || 21}
      viewBox='0 0 25 25'
      fill='none'
      {...props}
    >
      <Path
        d='M11.068 4.031c-5.203 0-9.423 4.219-9.423 9.424a9.423 9.423 0 1018.846 0h-9.423V4.03zm11.789 8.345a9.394 9.394 0 00-2.759-6.662l-6.664 6.662h9.423zM12.26 2.734v9.421l6.662-6.662a9.393 9.393 0 00-6.662-2.759z'
        fill={props.color || "#000"}
      />
    </Svg>
  );
}

export default Round;
