import styles from "./App.module.css";
import { MoviesScrolledView, Navbar } from "./sections/";
import { getQuery } from "./redux/slices/searchSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import type { AxiosResponse } from "axios";
import { API_BASE_URL, API_KEY } from "./config";
import { useEffect, useState } from "react";
import { MoviePoster, PosterSizes } from "./components/ui";

function App() {
  const [searchData, setSearchData] = useState<AxiosResponse | null>(null);

  const query = useSelector(getQuery);

  useEffect(() => {
    if (query !== "") {
      (async () => {
        try {
          setSearchData(
            await axios.get(
              `${API_BASE_URL}/3/search/multi?query=${query}&api_key=${API_KEY}`,
            ),
          );

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
          {searchData.data.results.map((e: any) => (
            <MoviePoster
              key={e.id}
              src={e.poster_path}
              size={PosterSizes.W185}
            />
          ))}
        </div>
      )}

      {/* {query ? (
        <div>{query}</div>
      ) : (
        <>
          <MoviesScrolledView variant="popular" />
          <MoviesScrolledView variant="top_rated" />
          <MoviesScrolledView variant="upcoming" />
          <MoviesScrolledView variant="now_playing" />
        </>
      )} */}
    </div>
  );
}

export default App;
