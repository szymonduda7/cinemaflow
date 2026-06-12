import styles from "./Navbar.module.scss";
import { NavLink } from "react-router";
import { SearchBar, Flex } from "../../components/common";
import { BellIcon } from "../../components/icons";
import { Text } from "../../components/ui";

export function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      className={styles["main"]}
    >
      <Flex gap={"48px"} alignItems="center">
        <Text variant="display-lg">CINEMAFLOW</Text>

        <Flex gap={"32px"} alignItems="center">
          <NavLink to={"/"}>
            <Text variant="body-md">Movies</Text>
          </NavLink>
          <Text variant="body-md">Series</Text>
          <Text variant="body-md">Watchlist</Text>
        </Flex>
      </Flex>

      <Flex gap={"24px"} alignItems="center">
        <SearchBar />

        <BellIcon />
      </Flex>
    </Flex>
  );
}
