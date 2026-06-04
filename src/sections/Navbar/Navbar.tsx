import { NavLink } from "react-router";
import { SearchBar } from "../../components/common";
import { BellIcon } from "../../components/icons";
import { Text } from "../../components/ui";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <Text variant="display-lg">CINEMAFLOW</Text>

        <div className={styles.navItems}>
          <NavLink to={"/"}>
            <Text variant="body-md">Movies</Text>
          </NavLink>
          <Text variant="body-md">Series</Text>
          <Text variant="body-md">Watchlist</Text>
        </div>
      </div>

      <div className={styles.navActions}>
        <SearchBar />

        <BellIcon />
      </div>
    </div>
  );
}
