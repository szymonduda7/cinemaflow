import styles from "./MovieDetails.module.scss";
import { useEffect, useState } from "react";
import { sendApiRequest, type MovieDetails } from "../../config";
import { useParams } from "react-router";
import { DatabaseImage, Flex } from "../../components/common";
import { MovieInfo, Text } from "../../components/ui";
import numeral from "numeral";

function Card({ movieData }: { movieData: MovieDetails }) {
  const movieInfoContent = [
    movieData.release_date.slice(0, 4),
    movieData.vote_average.toFixed(2).toString(),
    `Budget: ${numeral(movieData.budget).format("0.0a")}`,
  ];

  return (
    <Flex gap={"32px"}>
      <DatabaseImage
        path={movieData.poster_path || ""}
        size={"w342"}
        className={styles["poster"]}
      />

      <Flex
        gap={"32px"}
        flexDirection="column"
        justifyContent="flex-end"
        style={{ height: "100%" }}
      >
        <Text variant="display-lg">{movieData.title}</Text>

        <Flex flexDirection="column" gap={"8px"}>
          <MovieInfo content={movieInfoContent} />

          <Text variant="body-lg" className={styles["description"]}>
            {movieData.overview}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function MovieDetails() {
  const [movieData, setMovieData] = useState<MovieDetails>();
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await sendApiRequest<MovieDetails>(`/movie/${movieId}`);

      setMovieData(response);
    })();
  }, []);

  return (
    movieData && (
      <main className={styles["main"]}>
        <section className={styles["hero"]}>
          <Card movieData={movieData} />
        </section>
      </main>
    )
  );
}
