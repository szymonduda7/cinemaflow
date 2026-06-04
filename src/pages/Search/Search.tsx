import { useEffect, useState } from "react";
import { Navbar } from "../../sections";
import styles from "./Search.module.css";
import type { SearchResponse } from "../../config/types";
import { useSelector } from "react-redux";
import { getQuery } from "../../redux";
import { sendApiRequest } from "../../config";
import { MoviePoster, PosterSizes } from "../../components/ui";

export function Search() {
  const [searchData, setSearchData] = useState<SearchResponse>();
  const query = useSelector(getQuery);

  useEffect(() => {
    (async () => {
      try {
        setSearchData(await sendApiRequest(`/search/multi`, { query }));

        console.log(searchData);
      } catch {
        console.log(`Search request failed.`);
      }
    })();
  }, [query]);

  return (
    <main className={styles["search"]}>
      <Navbar />

      {searchData && (
        <div className={styles["film-search-tiles"]}>
          {searchData.results.map((e: any) => (
            <MoviePoster
              key={e.id}
              src={e.poster_path}
              size={PosterSizes.W185}
            />
          ))}
        </div>
      )}
    </main>
  );
}
