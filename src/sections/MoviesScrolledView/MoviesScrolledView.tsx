import { useEffect, useState } from "react";
import { MoviePoster, PosterSizes, Text } from "../../components/ui";
import styles from "./MoviesScrolledView.module.css";
import { sendApiRequest } from "../../config";

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
      <section className={styles["movie-scrolled-view"]}>
        <div className={styles["top"]}>
          <Text variant="display-md">{createTitle()}</Text>
        </div>

        <div className={styles["scroll-view"]}>
          {data.results.map((e: any) => (
            <MoviePoster
              key={e.id}
              src={e.poster_path}
              size={PosterSizes.W185}
            />
          ))}
        </div>
      </section>
    )
  );
}
