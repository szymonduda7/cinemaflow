import { SearchIcon } from "../../icons";
import { Text } from "../../ui";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <SearchIcon />

      <Text variant="body-md">Search...</Text>
    </div>
  );
}
