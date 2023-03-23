import { BaseSvgProps } from "../../misc/types"

const MessagesSvg = ({ width, height, fill, stroke, strokeWidth }: BaseSvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 25.0002H2C1.45 25.0002 1 24.5502 1 24.0002V2.00024C1 1.45024 1.45 1.00024 2 1.00024H30C30.55 1.00024 
          31 1.45024 31 2.00024V30.0002C31 31.0002 30.61 31.6102 29 30.0002L24 25.0002Z"
        fill={fill}
      />
      <path
        d="M9 17.0001H15M9 9.0001H23M9 13.0001H23M22 23.004C22 23.004 28 29.006 29 30.006C30.609 31.616 31 31.008 
          31 30.008V2.008C31 1.456 30.553 1 30 1H2C1.447 1 1 1.456 1 2.008V24.008C1 24.561 1.447 25 2 25H20"
        stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};


export default MessagesSvg;