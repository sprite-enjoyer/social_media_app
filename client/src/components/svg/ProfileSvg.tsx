import { BaseSvgProps } from "../../misc/types"

const ProfileSvg = ({ fill, stroke, strokeWidth, width, height }: BaseSvgProps) => {
  return (
    <svg
      fill={fill}
      viewBox="0 0 32 32"
      version="1.1"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        profile
      </title>
      <path
        d="M28 9h-1.958v-2.938l-4.042-0.062 0.021 3h-12.146l0.083-3-3.958 0.062v3l-2-0.062c-1.104 0-2 0.896-2 
          2v14c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-14c0-1.104-0.896-2-2-2zM23 7h2v4h-2v-4zM10 13.812c1.208 
          0 2.188 1.287 2.188 2.875s-0.98 2.875-2.188 2.875-2.188-1.287-2.188-2.875 0.98-2.875 2.188-2.875zM7 
          7h2v4h-2v-4zM5.667 22.948c0 0 0.237-1.902 0.776-2.261s2.090-0.598 2.090-0.598 1.006 1.075 1.434 1.075c0.427
          0 1.433-1.075 1.433-1.075s1.552 0.238 2.091 0.598c0.633 0.422 0.791 2.261 0.791 2.261h-8.615zM26
          22h-9v-1h9v1zM26 20h-9v-1h9v1zM26 18h-9v-1h9v1zM26 16h-9v-1h9v1z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
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

export default { Component: ProfileSvg, activeProps, notActiveProps };