import styles from "./App.module.css";
import { MoviesScrolledView, Navbar } from "./sections/";
import { getQuery } from "./redux/slices/searchSlice";
import { useSelector } from "react-redux";
import { sendApiRequest } from "./config";
import { useEffect, useState } from "react";
import { MoviePoster, PosterSizes } from "./components/ui";
import { type SearchResponse } from "./config/types";

function App() {
  const [searchData, setSearchData] = useState<SearchResponse>();

  const query = useSelector(getQuery);

  useEffect(() => {
    if (query !== "") {
      (async () => {
        try {
          setSearchData(await sendApiRequest(`/search/multi`, { query }));

          console.log(searchData);
        } catch {
          console.log(`Search request failed.`);
        }
      })();
    }
  }, [query]);

  return (
    <div className={styles.mainContainer}>
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

      {query ? (
        <div>{query}</div>
      ) : (
        <>
          <MoviesScrolledView variant="popular" />
          <MoviesScrolledView variant="top_rated" />
          <MoviesScrolledView variant="upcoming" />
          <MoviesScrolledView variant="now_playing" />
        </>
      )}
    </div>
  );
}

export default App;
