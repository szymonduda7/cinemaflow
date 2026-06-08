import styles from "./SearchBar.module.css";

import { SearchIcon } from "../../icons";
import { TextInput } from "../TextInput";
import { useState } from "react";
import { setQuery } from "../../../redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Flex } from "../Flex";

export function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit() {
    dispatch(setQuery(value));
    navigate("/search");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === "Enter" && value !== "") {
      handleSubmit();
    }
  }

  return (
    <Flex className={styles.searchBar} gap={"16px"} alignItems="center">
      <SearchIcon />

      <TextInput
        value={value}
        setValue={setValue}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      />
    </Flex>
  );
}
