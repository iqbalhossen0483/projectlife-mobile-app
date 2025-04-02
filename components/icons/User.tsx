import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

function User(props: SvgProps) {
  return (
    <Svg
      width={props.width || 21}
      height={props.height || 21}
      viewBox='0 0 21 22'
      fill='none'
      {...props}
    >
      <G clipPath='url(#clip0_1_9545)' fill={props.color || "#000"}>
        <Path d='M10.75 10.77c2.223 0 4.026-2.299 4.026-5.135S14.184.5 10.749.5C7.315.5 6.723 2.8 6.723 5.635c0 2.836 1.802 5.135 4.026 5.135zM3.144 18.611c-.001-.048 0-.173 0 0zM18.355 18.746c0-.328.002-.047 0 0zM18.346 18.404c-.075-4.941-.689-6.349-5.392-7.24 0 0-.661.886-2.204.886-1.543 0-2.205-.886-2.205-.886-4.651.882-5.303 2.268-5.389 7.079-.007.393-.01.413-.011.368v.519s1.12 2.37 7.605 2.37 7.604-2.37 7.604-2.37v-.384c0 .028-.003-.026-.008-.342z' />
      </G>
      <Defs>
        <ClipPath id='clip0_1_9545'>
          <Path fill='#fff' transform='translate(.75 .5)' d='M0 0H20V21H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default User;
