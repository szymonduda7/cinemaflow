import styles from "./Home.module.css";
import { MoviesScrolledView, Navbar } from "../../sections";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />

      <MoviesScrolledView variant="popular" />
      <MoviesScrolledView variant="top_rated" />
      <MoviesScrolledView variant="upcoming" />
      <MoviesScrolledView variant="now_playing" />
    </main>
  );
}
