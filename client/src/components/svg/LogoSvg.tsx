import { memo } from "react";
import { BaseSvgProps } from "../../misc/types";

export interface LogoSvgProps extends BaseSvgProps {
  fill2: string,
  strokeWidth2: number
}

const LogoSvg = ({ width, height, stroke, strokeWidth, strokeWidth2, fill, fill2 }: LogoSvgProps) => {
  return (
    <svg viewBox="-4 0 20 20" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth={strokeWidth2}></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="lightning" transform="translate(-6 -2)">
          <path id="secondary" fill={fill2} d="M7,12l5,2-1,7,6-9-4-2,1-7Z"></path>
          <path
            id="primary"
            d="M7,12l5,2-1,7,6-9-4-2,1-7Z"
            fill={fill}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}>
          </path>
        </g>
      </g>
    </svg>
  );
};

export default memo(LogoSvg);