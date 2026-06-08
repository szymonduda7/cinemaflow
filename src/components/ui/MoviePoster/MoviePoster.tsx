import styles from "./MoviePoster.module.scss";

import { useNavigate } from "react-router";
import { DatabaseImage } from "../../common/DatabaseImage/DatabaseImage";
import { type ImageSize } from "../../../config";

interface MoviePosterProps {
  id: string;
  src: string;
  size: ImageSize;
}
// Fix the problem of props. Define how components are supposed to be used.

export function MoviePoster({ id, src, size }: MoviePosterProps) {
  const navigate = useNavigate();

  return (
    <DatabaseImage
      path={src}
      size={size}
      className={styles["movie-poster"]}
      onClick={() => {
        navigate(`/${id}`);
      }}
    />
  );
}
