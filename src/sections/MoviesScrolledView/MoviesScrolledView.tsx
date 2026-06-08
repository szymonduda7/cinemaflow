import { useEffect, useState } from "react";
import { MoviePoster, Text } from "../../components/ui";
import styles from "./MoviesScrolledView.module.scss";
import { sendApiRequest } from "../../config";
import { Flex } from "../../components/common/";
interface MoviesScrolledViewProps {
  variant: "popular" | "top_rated" | "now_playing" | "upcoming";
}

export function MoviesScrolledView({ variant }: MoviesScrolledViewProps) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let data;

    (async () => {
      data = await sendApiRequest(`/movie/${variant}`);
      setData(data);
    })();
  }, []);

  function createTitle() {
    switch (variant) {
      case "popular":
        return "Trending Now";
      case "upcoming":
        return "In cinemas soon";
      case "top_rated":
        return "Others found it great";
      case "now_playing":
        return "Currently in theathres";
    }
  }

  return (
    data && (
      <Flex
        gap={"16px"}
        flexDirection="column"
        className={styles["movie-scrolled-view"]}
      >
        <Flex justifyContent="space-between" className={styles["top"]}>
          <Text variant="display-md">{createTitle()}</Text>
        </Flex>

        <Flex gap={"16px"} className={styles["scroll-view"]}>
          {data.results.map((e: any) => (
            <MoviePoster
              key={e.id}
              id={e.id}
              src={e.poster_path}
              size={"w185"}
            />
          ))}
        </Flex>
      </Flex>
    )
  );
}
