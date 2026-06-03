import styles from "./SearchBar.module.css";

import { SearchIcon } from "../../icons";
import { TextInput } from "../TextInput";
import { useState } from "react";
import { setQuery } from "../../../redux";
import { useDispatch } from "react-redux";

export function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(setQuery(value));
    setValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className={styles.searchBar}>
      <SearchIcon />

      <TextInput
        value={value}
        setValue={setValue}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
