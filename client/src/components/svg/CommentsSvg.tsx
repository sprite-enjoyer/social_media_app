import { memo } from "react";
import { BaseSvgProps } from "../../misc/types";

const CommentsSvg = ({ width, height, stroke, strokeWidth, fill }: BaseSvgProps) => {
  return (
    <svg viewBox="0 0 24 24" width={width} height={height} xmlns="http://www.w3.org/2000/svg" fill={fill}>
      <g id="SVGRepo_bgCarrier" strokeWidth={strokeWidth} />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.188c1 0 1.812.811 1.812 1.812 0 .808.976 1.212 
          1.547.641l1.867-1.867A2 2 0 0 1 14.828 18H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
        />
      </g>
    </svg>
  );
};

export default memo(CommentsSvg);