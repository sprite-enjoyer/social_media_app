import { memo } from "react";
import { BaseSvgProps } from "../../misc/types";

export interface ShareSvgProps extends BaseSvgProps {
  stroke2: string,
  stroke3: string,
  strokeWidth2: number,
  strokeWidth3: number
}

const ShareSvg = ({
  width,
  height,
  fill,
  stroke,
  stroke2,
  stroke3,
  strokeWidth,
  strokeWidth2,
  strokeWidth3
}: ShareSvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.75 6.25L13.75 6.25C12.6454 6.25 11.75 7.14543 11.75 8.25L11.75 13.25"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      </path>
      <path
        d="M18.8062 1.8132L22.75 6.24999L18.8062 10.6868"
        stroke={stroke2}
        strokeWidth={strokeWidth2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      </path>
      <path
        d="M21.75 13.75V20C21.75 21.1046 20.8546 22 19.75 22H3.75C2.64543 
          22 1.75 21.1046 1.75 20V4.75C1.75 3.64543 2.64543 2.75 3.75 2.75H8.75"
        stroke={stroke3}
        strokeWidth={strokeWidth3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      </path>
    </svg>
  );
};

export default memo(ShareSvg);