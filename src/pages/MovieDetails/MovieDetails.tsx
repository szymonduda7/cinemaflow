import { useEffect, useState } from "react";
import { sendApiRequest } from "../../config";
import type { MovieDetails } from "../../config/types";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";

export function MovieDetails() {
  const [movieData, setMovieData] = useState<MovieDetails>();
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await sendApiRequest<MovieDetails>(`/movie/${movieId}`);

      setMovieData(response);
    })();
  }, []);

  return movieData && <main className={styles["movie-details"]}></main>;
}
