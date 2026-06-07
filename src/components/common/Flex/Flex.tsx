import { type ReactNode, type ElementType, type CSSProperties } from "react";

export interface FlexProps {
  children: ReactNode;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: string | number;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Flex({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap,
  flexWrap = "nowrap",
  as,
  className,
  style,
}: FlexProps) {
  const Component = as || "div";
  const inlineStyles = {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    flexWrap,
  };

  return (
    <Component style={{ ...inlineStyles, ...style }} className={className}>
      {children}
    </Component>
  );
}
