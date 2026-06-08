import styles from "./Home.module.scss";
import { MoviesScrolledView, Navbar } from "../../sections";
import { Flex } from "../../components/common/";

export default function Home() {
  return (
    <Flex
      className={styles["main-container"]}
      flexDirection="column"
      gap={"64px"}
    >
      <Navbar />

      <MoviesScrolledView variant="popular" />
      <MoviesScrolledView variant="top_rated" />
      <MoviesScrolledView variant="upcoming" />
      <MoviesScrolledView variant="now_playing" />
    </Flex>
  );
}
