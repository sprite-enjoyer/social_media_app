import { BaseSvgProps } from "../../misc/types";

export interface NotificationsSvgProps extends BaseSvgProps {
  stroke2: string,
  strokeWidth2: number,
  fill2: string,
}

const NotificationsSvg = (
  {
    width,
    height,
    stroke,
    stroke2,
    strokeWidth,
    strokeWidth2,
    fill,
    fill2,
  }: NotificationsSvgProps) => {

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="notification-alt"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <circle
          id="primary"
          cx="18.5"
          cy="5.5"
          r="2.5"
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="primary-2"
          data-name="primary"
          d="M20,12v6a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h6"
          fill={fill2}
          stroke={stroke2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth2}
        />
      </g>
    </svg>
  );
};

export default NotificationsSvg;