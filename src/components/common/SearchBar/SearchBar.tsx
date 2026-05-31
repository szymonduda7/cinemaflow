import styles from "./SearchBar.module.css";

import { SearchIcon } from "../../icons";
import { TextInput } from "../TextInput";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function SearchBar() {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    let result;

    (async () => {
      result = await axios.get(`${BASE_URL}/3/search/multi?query=${query}`);
    })();
  }, [query]);

  return (
    <div className={styles.searchBar}>
      <SearchIcon />

      <TextInput value={value} setValue={setValue} placeholder="Search..." />
    </div>
  );
}
