import { BaseSvgProps } from "../../misc/types";

const StarSvg = ({ fill, stroke, strokeWidth, width, height }: BaseSvgProps) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z" strokeWidth={strokeWidth}
        strokeLinecap="round" strokeLinejoin="round" stroke={stroke} />
    </svg>
  );
};

const activeProps: BaseSvgProps = {
  fill: "rgb(254, 91, 56)",
  stroke: "black",
  strokeWidth: 2,
  width: "40px",
  height: "40px",
};

const notActiveProps: BaseSvgProps = {
  fill: "rgb(254, 91, 56)",
  stroke: "black",
  strokeWidth: 2,
  width: "40px",
  height: "40px",
};


export default { Component: StarSvg, activeProps, notActiveProps };