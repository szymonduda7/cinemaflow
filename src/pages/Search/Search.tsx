import styles from "./Search.module.scss";
import { useEffect, useState } from "react";
import { Navbar } from "../../sections";
import type { SearchResponse } from "../../config/types";
import { useSelector } from "react-redux";
import { getQuery } from "../../redux";
import { sendApiRequest } from "../../config";
import { MoviePoster } from "../../components/ui";
import { Flex } from "../../components/common/";

export function Search() {
  const [searchData, setSearchData] = useState<SearchResponse>();
  const query = useSelector(getQuery);

  useEffect(() => {
    (async () => {
      try {
        setSearchData(await sendApiRequest(`/search/movie`, { query }));

        console.log(searchData);
      } catch {
        console.log(`Search request failed.`);
      }
    })();
  }, [query]);

  return (
    <Flex flexDirection="column">
      <Navbar />

      {searchData && (
        <Flex
          flexWrap="wrap"
          gap={"16px"}
          className={styles["film-search-tiles"]}
        >
          {searchData.results.map((e: any) => (
            <MoviePoster
              id={e.id}
              key={e.id}
              src={e.poster_path}
              size={"w185"}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
}
