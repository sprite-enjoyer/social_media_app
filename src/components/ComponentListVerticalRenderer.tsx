import { CSSProperties, ReactNode } from "react";

export interface ComponentListVerticalRendererProps {
  children: ReactNode[],
  wrapperStyles?: CSSProperties;
  className?: string
}

const ComponentListVerticalRenderer = ({ children, wrapperStyles, className }: ComponentListVerticalRendererProps) => {
  return <div className={className} style={wrapperStyles}>{...children}</div>;
};


export default ComponentListVerticalRenderer;