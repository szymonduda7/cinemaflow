// import styles from "./DatabaseImage.module.css";

import { IMAGE_BASE_URL, type ImageSize } from "../../../config";

interface DatabaseImageProps {
  path: string;
  alt?: string;
  size?: ImageSize;
  onClick?: () => void;
  className?: string;
}

export function DatabaseImage({
  path,
  alt = "image",
  size = "original",
  onClick,
  className,
}: DatabaseImageProps) {
  return (
    <img
      src={`${IMAGE_BASE_URL}/${size}/${path}`}
      alt={alt}
      onClick={onClick}
      className={className}
      loading="lazy"
    />
  );
}
