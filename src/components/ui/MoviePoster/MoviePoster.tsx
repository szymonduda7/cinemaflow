import { useNavigate } from "react-router";
import styles from "./MoviePoster.module.css";

const PosterSizes = {
  W92: "w92",
  W185: "w185",
  W342: "w342",
  W500: "w500",
  W780: "w780",
  Original: "original",
} as const;

type PosterSize = "w92" | "w185" | "w342" | "w500" | "w780" | "original";

interface MoviePosterProps {
  id: string;
  src: string;
  size: PosterSize;
}

export function MoviePoster({ id, src, size }: MoviePosterProps) {
  const navigate = useNavigate();

  return (
    <img
      src={`https://image.tmdb.org/t/p/${size}${src}`}
      alt="Poster"
      onClick={() => {
        navigate(`/${id}`);
      }}
      className={styles["movie-poster"]}
    />
  );
}

export { PosterSizes };
