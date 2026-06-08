import type { ReactNode } from "react";
import styles from "./Text.module.scss";

type TextVariant =
  | "display-lg"
  | "display-md"
  | "headline-lg"
  | "headline-lg-mobile"
  | "title-lg"
  | "body-lg"
  | "body-md"
  | "label-md";

type TextAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";

interface TextProps {
  children: ReactNode | string;
  className?: string;
  variant?: TextVariant;
  as?: TextAs;
}

const variantClassMap: Record<TextVariant, string> = {
  "display-lg": styles["display-lg"],
  "display-md": styles["display-md"],
  "headline-lg": styles["headline-lg"],
  "headline-lg-mobile": styles["headline-lg-mobile"],
  "title-lg": styles["title-lg"],
  "body-lg": styles["body-lg"],
  "body-md": styles["body-md"],
  "label-md": styles["label-md"],
};

export function Text({
  children,
  className,
  variant = "body-md",
  as: Tag = "p",
}: TextProps) {
  const variantClass = variantClassMap[variant];
  return (
    <Tag className={[variantClass, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
