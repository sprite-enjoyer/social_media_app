import { CSSProperties, ReactNode } from "react";

export interface ReactNodeListVerticalRendererProps {
  children: ReactNode[],
  className?: string
}

const ReactNodeListVerticalRenderer = ({ children, className }: ReactNodeListVerticalRendererProps) => {
  return <div className={className}>{...children}</div>;
};

export default ReactNodeListVerticalRenderer;